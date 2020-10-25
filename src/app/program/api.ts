import { Container, Text, Shape, Graphics, MouseEvent } from 'createjs-module';

import config from './config';
import { ICanvasSize, IMovement, IDirection, IAxis, ITrackEvents } from 'types';

import { colors } from 'const';
import { Subject, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

const verticalAddOs = navigator.appVersion.includes('Windows') ? 0 : 5;
export const createLetter = (letter: string, draggable = true) => {
  const text = new Text(
    letter,
    `${config.letter.size} ${config.letter.font}`,
    config.letter.color
  );

  text.textAlign = 'middle';

  text.textBaseline = 'bottom';

  text.x = (config.container.width - text.getBounds().width) / 2;
  text.y =
    config.container.height -
    (config.container.height - text.getBounds().height) +
    verticalAddOs;

  text.name = letter;

  text.setBounds(0, 0, config.container.width, config.container.height);

  text.color = draggable ? getRandom.color() : '#000';

  const box = createBox(text);

  return box;
};

export const createBox = (text: Text) => {
  const container = new Container();

  const { height } = text.getBounds();

  const rectangle = new Shape();
  rectangle.graphics
    .beginFill('#fff')
    .drawRoundRect(
      0,
      0,
      config.container.width,
      height,
      config.container.radius
    );

  container.name = text.name;

  // rectangle.alpha = 0;

  container.addChild(rectangle, text);

  return container;
};

export const createAlpha = (letter: string): Container => {
  const text = createLetter(letter, false);

  text.alpha = config.letter.alpha;

  return text;
};

export const setAlphaLettersPosition = (
  canvasSize: ICanvasSize,
  letters: Container[]
): Container[] => {
  const centerWidth = Math.floor(canvasSize.width / 2);
  const centerHeight = Math.floor(canvasSize.height / 2);

  const totalWidth =
    config.container.width * letters.length +
    (letters.length - 1) * config.container.spacer;

  let startLeftPos = centerWidth - config.container.width - totalWidth / 2;

  return letters.map((letter, index) => {
    const left =
      startLeftPos + config.container.width + config.container.spacer;

    letter.x = left;
    letter.y = centerHeight;

    startLeftPos = left;

    return letter;
  });
};

export const getRandom = {
  height: (maxHeight: number) => {
    const letterSize = config.container.width;
    const y = Math.floor(Math.random() * maxHeight);
    if (y + letterSize >= maxHeight) {
      return y - letterSize;
    }

    return y;
  },
  width: (maxWidth: number) => {
    const letterSize = config.container.width;
    const x = Math.floor(Math.random() * maxWidth);

    if (x + letterSize >= maxWidth) {
      return x - letterSize;
    }

    return x;
  },
  fromTwoValues: (a: any, b: any) =>
    Math.floor(Math.random() * 333) % 2 ? a : b,
  color: () => {
    const index = Math.floor(Math.random() * colors.length);

    return colors[index];
  },
  fromArray: (array: any[]) => {
    const index = Math.floor(Math.random() * array.length);

    return array[index];
  },
};

const generateMovement = (): IMovement => {
  const direction = getRandom.fromTwoValues(
    IDirection.POSITIVE,
    IDirection.NEGATIVE
  );
  const axis = getRandom.fromTwoValues(IAxis.X, IAxis.Y);

  return { direction, axis };
};

const updatePosition = (
  text: Container,
  axis: IAxis,
  direction: IDirection,
  maxValue: number
): IDirection => {
  if (direction === IDirection.POSITIVE) {
    if (text[axis] + config.speed >= maxValue) {
      direction = IDirection.NEGATIVE;
      text[axis] = maxValue;
      return direction;
    }

    text[axis] += config.speed;

    return direction;
  }

  if (text[axis] - config.speed <= 0) {
    direction = IDirection.POSITIVE;
    text[axis] = 0;
    return direction;
  }

  text[axis] -= config.speed;

  return direction;
};

const getMaxRightPos = (maxWidth: number, container: Container) =>
  maxWidth - container.getBounds().width;
const getMaxTopPos = (maxHeight: number, container: Container) =>
  maxHeight - container.getBounds().height;

export const setMovement = (
  canvasSize: ICanvasSize,
  text: Container
): Function => {
  let shouldMove = true;
  let complete = false;

  text.y = getRandom.height(canvasSize.height);
  text.x = getRandom.width(canvasSize.width);

  let { direction, axis } = generateMovement();

  const maxValue =
    axis === IAxis.Y
      ? getMaxTopPos(canvasSize.height, text)
      : getMaxRightPos(canvasSize.width, text);

  text.on(ITrackEvents.MOUSEDOWN, () => (shouldMove = false));
  text.on(ITrackEvents.MOUSEUP, () => (shouldMove = true));
  text.on(ITrackEvents.TICK, () => {
    if (complete === false && shouldMove) {
      direction = updatePosition(text, axis, direction, maxValue);
    }
  });

  return () => {
    complete = true;
  };
};

interface ICenter {
  centerX: number;
  centerY: number;
}
const intersects = ({ centerX, centerY }: ICenter, moving: Container) => {
  const left = moving.x;
  const top = moving.y;
  const right = moving.x + moving.getBounds().width;
  const bottom = moving.y + moving.getBounds().height;

  return (
    left <= centerX && right >= centerX && top <= centerY && bottom >= centerY
  );
};

export const setIntersectionObserver = (
  drop: Container,
  moving: Container,
  snapCallback: Function
) => {
  const centerX = drop.x + drop.getBounds().width / 2;
  const centerY = drop.y + drop.getBounds().height / 2;

  const originalPosition = {
    x: 0,
    y: 0,
  };

  const mouseMove = (e: object) => {
    const event = e as MouseEvent;

    moving.x = event.stageX;
    moving.y = event.stageY;

    if (intersects({ centerX, centerY }, moving)) {
      moving.x = drop.x;
      moving.y = drop.y;
    }
  };

  const rememberLastPos = () => {
    originalPosition.x = moving.x;
    originalPosition.y = moving.y;
  };

  moving.on(ITrackEvents.MOUSEDOWN, rememberLastPos);
  moving.on(ITrackEvents.MOUSEMOVE, mouseMove);

  moving.on(ITrackEvents.MOUSEUP, (e: object) => {
    const event = e as MouseEvent;

    moving.x = event.stageX;
    moving.y = event.stageY;

    if (intersects({ centerX, centerY }, moving)) {
      moving.x = drop.x;
      moving.y = drop.y;

      speak(moving.name);
      snapCallback();

      moving.off(ITrackEvents.MOUSEDOWN, rememberLastPos);
      moving.off(ITrackEvents.MOUSEMOVE, mouseMove);
      return;
    }

    moving.x = originalPosition.x;
    moving.y = originalPosition.y;
  });

  return;
};

const message = new SpeechSynthesisUtterance();
message.rate = 1;
message.pitch = 1;
message.volume = 1;
export const speak = (word: string) => {
  speak$.next(word);
};

const speak$ = new Subject();

speak$
  .pipe(
    map((value) => value as string),
    concatMap((word) => {
      message.text = word;

      return of(window.speechSynthesis.speak(message));
    })
  )
  .subscribe();
