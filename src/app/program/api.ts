import { Container, Text, Shape, MouseEvent } from 'createjs-module';
import { Subject, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

import { IMovement, IDirection, IAxis, ITrackEvents } from 'types';
import config from 'const/config';
import { getRandom, getVerticalAddOs } from 'utils/helpers';

const verticalAddOs = getVerticalAddOs();
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

export const setAlphaLettersPosition = (letters: Container[]): Container[] => {
  const centerWidth = Math.floor(config.window.width / 2);
  const centerHeight = Math.floor(config.window.height / 2);

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

export const setMovement = (text: Container): Function => {
  let shouldMove = true;
  let complete = false;

  text.y = getRandom.height(config.window.height);
  text.x = getRandom.width(config.window.width);

  let { direction, axis } = generateMovement();

  const maxValue =
    axis === IAxis.Y
      ? getMaxTopPos(config.window.height, text)
      : getMaxRightPos(config.window.width, text);

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

export type ISnapCallback = (drop: Container, moving: Container) => any;

export const setIntersectionObserver = (
  drop: Container,
  moving: Container,
  snapCallback: ISnapCallback
) => {
  const centerX = drop.x + drop.getBounds().width / 2;
  const centerY = drop.y + drop.getBounds().height / 2;

  let completed = false;

  const originalPosition = {
    x: 0,
    y: 0,
  };

  const mouseMove = (e: object) => {
    if (completed) {
      return;
    }

    const event = e as MouseEvent;

    moving.x = event.stageX;
    moving.y = event.stageY;

    if (intersects({ centerX, centerY }, moving)) {
      moving.x = drop.x;
      moving.y = drop.y;

      completed = true;
      moving.off(ITrackEvents.MOUSEMOVE, mouseMoveRef);
      moving.off(ITrackEvents.MOUSEDOWN, mouseDownRef);
    }
  };

  const mouseUp = (e: object) => {
    const event = e as MouseEvent;

    moving.x = event.stageX;
    moving.y = event.stageY;

    if (completed) {
      moving.x = drop.x;
      moving.y = drop.y;

      moving.off(ITrackEvents.MOUSEUP, mouseUpRef);
      speak(moving.name);

      snapCallback(drop, moving);
      return;
    }

    moving.x = originalPosition.x;
    moving.y = originalPosition.y;
  };

  const mouseDown = () => {
    originalPosition.x = moving.x;
    originalPosition.y = moving.y;
  };

  const mouseDownRef = moving.on(ITrackEvents.MOUSEDOWN, mouseDown);
  const mouseMoveRef = moving.on(ITrackEvents.MOUSEMOVE, mouseMove);
  const mouseUpRef = moving.on(ITrackEvents.MOUSEUP, mouseUp);

  return;
};

const createMessage = (word: string) => {
  const message = new SpeechSynthesisUtterance();
  message.rate = 1;
  message.pitch = 1;
  message.volume = 1;
  message.text = word;

  return message;
};
export const speak = (word: string) =>
  new Promise((resolve) => {
    speak$.next({
      word,
      resolve,
    });
  });

const speak$ = new Subject();

interface IVoice {
  word: string;
  resolve: Function;
}
speak$
  .pipe(
    map((value) => value as IVoice),
    concatMap(({ word, resolve }) => {
      const message = createMessage(word);
      window.speechSynthesis.speak(message);

      message.onend = () => resolve();

      return of(word);
    })
  )
  .subscribe();
