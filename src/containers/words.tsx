import React, { useRef } from 'react';

import { GAME_TYPES } from 'types';
import useGame from 'hooks/useGame';

export default () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGame(GAME_TYPES.WORDS, canvasRef);

  return <canvas id="canvas" ref={canvasRef} />;
};
