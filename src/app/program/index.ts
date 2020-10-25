import { Stage, Ticker, Touch, Container } from 'createjs-module';

import {
  setAlphaLettersPosition,
  setMovement,
  createAlpha,
  createLetter,
  setIntersectionObserver,
  getRandom,
  speak,
} from './api';
import { ICanvasSize } from 'types';
import { wordsList } from 'const';

const _window = window as any;

_window.oncontextmenu = () => false;
_window.selectstart = () => false;

const newGame = (stage: Stage, canvasSize: ICanvasSize) => {
  let word = getRandom.fromArray(wordsList);

  if (word === 'number') {
    word = String(Math.max(10, Math.floor(Math.random() * 100)));
  }

  const letters = word.split('') as string[];
  const lettersArray = letters.map(createAlpha);

  let lettersComplete = 0;

  const isComplete = () => {
    if (lettersComplete === letters.length) {
      complete();
    }
  };

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

    setIntersectionObserver(containerLetters[index], movingText, () => {
      snapCallback();
      lettersComplete++;

      isComplete();
    });

    return movingText;
  });

  const complete = async () => {
    letters.forEach(speak);
    await speak(word);

    containerLetters.forEach((letter) => stage.removeChild(letter));
    movingLetters.forEach((letter) => stage.removeChild(letter));

    newGame(stage, canvasSize);
  };
};

function init(canvasSize: ICanvasSize) {
  const stage = new Stage('canvas');

  Touch.enable(stage);

  newGame(stage, canvasSize);

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
