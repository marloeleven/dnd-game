import { Container, Text, Shape, Graphics, MouseEvent } from 'createjs-module';

import config from './config';
import { ICanvasSize, IMovement, IDirection, IAxis } from 'types';

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
  'pink',
  'gray',
];

export const createLetter = (letter: string) => {
  const text = new Text(
    letter,
    `${config.letter.size} ${config.letter.font}`,
    config.letter.color
  );

  return text;
};

export const createBox = (text: Text) => {
  const container = new Container();

  const rectangle = new Shape();
  rectangle.graphics
    .beginFill('#c7f5ff')
    .drawRoundRect(
      0,
      0,
      config.container.width,
      config.container.height,
      config.container.radius
    );

  container.addChild(rectangle, text);

  return container;
};

export const createAlpha = (letter: string) => {
  const text = createLetter(letter);

  text.alpha = config.letter.alpha;

  return text;
};

type TextArray = Text[];

export const setAlphaLettersPosition = (
  canvasSize: ICanvasSize,
  letters: TextArray
): TextArray => {
  const letterWidth = parseInt(config.letter.size);

  const centerWidth = Math.floor(canvasSize.width / 2);
  const centerHeight = Math.floor(canvasSize.height / 2 - letterWidth / 2);

  const centerLetter = letters.length / 2;
  const startLeftPos = centerWidth - centerLetter * letterWidth;

  return letters.map((letter, index) => {
    letter.x = startLeftPos + letterWidth * index;
    letter.y = centerHeight;

    return letter;
  });
};

const getLetterSize = () => parseInt(config.letter.size);
const getRandom = {
  height: (maxHeight: number) => {
    const letterSize = getLetterSize();
    const y = Math.floor(Math.random() * maxHeight);
    if (y + letterSize >= maxHeight) {
      return y - letterSize;
    }

    return y;
  },
  width: (maxWidth: number) => {
    const letterSize = getLetterSize();
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
  text: Text,
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

export const setMovement = (canvasSize: ICanvasSize, text: Text) => {
  let shouldMove = true;

  text.color = getRandom.color();

  text.y = getRandom.height(canvasSize.height);
  text.x = getRandom.width(canvasSize.width);

  let { direction, axis } = generateMovement();

  const maxValue =
    axis === IAxis.Y
      ? canvasSize.height - getLetterSize() * 0.8
      : canvasSize.width - getLetterSize() * 0.5;

  text.on('mousedown', () => (shouldMove = false));
  text.on('pressup', () => (shouldMove = true));
  text.on('tick', () => {
    if (shouldMove) {
      direction = updatePosition(text, axis, direction, maxValue);
    }
  });
};

export const setIntersection = (parent: Text, child: Text) => {
  return;
};
