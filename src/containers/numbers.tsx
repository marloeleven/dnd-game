import React, { useRef, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { css } from 'emotion';

import Button from '@material-ui/core/Button';

import { GAME_TYPES } from 'types';
import useGame from 'hooks/useGame';

export default () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(push('/'));
  }, [dispatch]);

  useGame(GAME_TYPES.NUMBERS, canvasRef);

  return (
    <>
      <canvas id="canvas" ref={canvasRef} />
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
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
