import React, { useLayoutEffect, useRef } from 'react';
import config from 'const/config';
import { GAME_TYPES } from 'types';
import useGame from 'hooks/useGame';

export default () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGame(GAME_TYPES.NUMBERS, canvasRef);

  return <canvas id="canvas" ref={canvasRef} />;
};
