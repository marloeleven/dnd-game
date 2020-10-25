import { Stage, Ticker, Touch, Container } from 'createjs-module';

import {
  setAlphaLettersPosition,
  setMovement,
  createAlpha,
  createLetter,
  setIntersectionObserver,
  getRandom,
} from './api';
import { ICanvasSize } from 'types';
import { wordsList } from 'const';

const _window = window as any;

_window.oncontextmenu = () => false;
_window.selectstart = () => false;

function init(canvasSize: ICanvasSize) {
  const stage = new Stage('canvas');

  Touch.enable(stage);

  const word = getRandom.fromArray(wordsList);
  const letters = word.split('') as string[];
  const lettersArray = letters.map(createAlpha);

  const containerLetters = setAlphaLettersPosition(
    canvasSize,
    lettersArray
  ).map((letter) => {
    stage.addChild(letter);

    return letter;
  });

  const movingLetters = letters.map((letter, index) => {
    const movingText = createLetter(letter) as Container;

    const snapCallback = setMovement(canvasSize, movingText);

    stage.addChild(movingText);

    setIntersectionObserver(containerLetters[index], movingText, snapCallback);

    return movingText;
  });

  // Tween.get(circle, { loop: true })
  //   .to({ x: 400 }, 1000, Ease.getPowInOut(4))
  //   .to({ alpha: 0, y: 175 }, 500, Ease.getPowInOut(2))
  //   .to({ alpha: 0, y: 225 }, 100)
  //   .to({ alpha: 1, y: 200 }, 500, Ease.getPowInOut(2))
  //   .to({ x: 100 }, 800, Ease.getPowInOut(2));

  Ticker.setFPS(60);
  Ticker.addEventListener('tick', stage);
}

export default init;