import { useLayoutEffect } from 'react';

import initProgram from 'app/program';

import { GAME_TYPES } from 'types';
import config from 'const/config';

export default (
  type: GAME_TYPES,
  canvasRef: React.RefObject<HTMLCanvasElement>
) => {
  useLayoutEffect(() => {
    if (canvasRef.current) {
      const body = document.querySelector('body');

      if (body) {
        const { height, width } = body.getBoundingClientRect();

        Object.assign(config.window, { height, width });

        canvasRef.current.height = height;
        canvasRef.current.width = width;
      }
    }

    initProgram(type);
  }, []);

  return;
};
