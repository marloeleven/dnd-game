import React, { useRef } from 'react';
import { css } from 'emotion';

import Button from '@material-ui/core/Button';

import { GAME_TYPES } from 'types';
import useGame from 'hooks/useGame';
import { useHistory } from 'react-router-dom';

export default () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const history = useHistory();

  useGame(GAME_TYPES.WORDS, canvasRef);

  return (
    <>
      <canvas id="canvas" ref={canvasRef} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push('/')
        }}
        className={buttonStyle}
      >
        Home
      </Button>
    </>
  );
};

const buttonStyle = css`
  position: absolute !important;
  top: 1em;
  right: 1em;
`;
