import React, { useLayoutEffect, useRef } from 'react';

import initProgram from 'app/program';

export default () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvasSize = {
      width: 500,
      height: 500,
    };
    if (canvasRef.current) {
      const body = document.querySelector('body');

      if (body) {
        const { height, width } = body.getBoundingClientRect();

        canvasRef.current.height = height;
        canvasRef.current.width = width;

        Object.assign(canvasSize, { height, width });
      }
    }

    initProgram(canvasSize);
  }, []);

  return <canvas id="canvas" ref={canvasRef} />;
};
