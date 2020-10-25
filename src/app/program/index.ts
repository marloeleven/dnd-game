import { Stage, Ticker } from 'createjs-module';

import {
  setAlphaLettersPosition,
  setMovement,
  createAlpha,
  createLetter,
} from './api';
import { ICanvasSize } from 'types';

function init(canvasSize: ICanvasSize) {
  const stage = new Stage('canvas');

  const word = '5871';
  const letters = word.split('');
  const letterArray = letters.map(createAlpha);

  setAlphaLettersPosition(canvasSize, letterArray).forEach(
    (dropText, index) => {
      const movingText = createLetter(letters[index]);
      setMovement(canvasSize, movingText);

      stage.addChild(dropText);
      stage.addChild(movingText);
    }
  );

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
