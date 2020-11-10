import { Stage, Ticker, Touch, Container } from 'createjs-module';

import {
  setAlphaLettersPosition,
  setMovement,
  createAlpha,
  createLetter,
  setIntersectionObserver,
  speak,
} from './api';
import { getRandom } from 'utils/helpers';
import { wordsList } from 'const';
import { GAME_TYPES } from 'types';

const newGame = (type: GAME_TYPES, stage: Stage) => {
  const word =
    GAME_TYPES.WORDS === type
      ? getRandom.fromArray(wordsList)
      : getRandom.numberString(0, 99);

  const letters = word.split('') as string[];
  const lettersArray = letters.map(createAlpha);

  let lettersComplete = 0;

  let dropInOrder = true;
  let lastDroppedIndex = -1;

  const isComplete = () => {
    if (lettersComplete === letters.length) {
      complete();
    }
  };

  const containerLetters = setAlphaLettersPosition(lettersArray).map(
    (letter) => {
      stage.addChild(letter);

      return letter;
    }
  );

  const movingLetters = letters.map((letter, index) => {
    const movingText = createLetter(letter) as Container;

    const snapCallback = setMovement(movingText);

    stage.addChild(movingText);

    setIntersectionObserver(
      containerLetters[index],
      movingText,
      (drop, moving) => {
        const index = containerLetters.findIndex((cont) => cont === drop);

        if (lastDroppedIndex > index) {
          dropInOrder = false;
        }

        lastDroppedIndex = index;

        drop.alpha = 1;
        stage.removeChild(moving);

        snapCallback();
        lettersComplete++;

        isComplete();
      }
    );

    return movingText;
  });

  const complete = async () => {
    if (!dropInOrder) {
      letters.forEach(speak);
    }

    await speak(word);

    containerLetters.forEach((letter) => stage.removeChild(letter));
    movingLetters.forEach((letter) => stage.removeChild(letter));

    newGame(type, stage);
  };
};

function init(type: GAME_TYPES) {
  const stage = new Stage('canvas');

  Touch.enable(stage);

  newGame(type, stage);

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
