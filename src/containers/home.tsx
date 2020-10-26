import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { css } from 'emotion';
import clsx from 'clsx';

import * as appActions from 'app/slices/app';
import { GAME_TYPES } from 'types';

const homeStyle = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const buttonStyle = css`
  font-size: 30px;
  border: 2px solid #fff;
  cursor: pointer;
  padding: 2vh 2vw;
  border-radius: 8px;

  &:hover {
    opacity: 0.8;
  }
`;

const wordsStyle = clsx(
  buttonStyle,
  css`
    background-color: navajowhite;
  `
);

const numbersStyle = clsx(
  buttonStyle,
  css`
    background-color: rgb(72 209 204);
  `
);
export default () => {
  const dispatch = useDispatch();

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const type = event.currentTarget.dataset.type as GAME_TYPES;

      dispatch(appActions.setGame(type));
    },
    [dispatch]
  );

  return (
    <div className={homeStyle}>
      <div className={wordsStyle} onClick={onClick} data-type="words">
        Words
      </div>
      <div className={numbersStyle} onClick={onClick} data-type="numbers">
        Numbers
      </div>
    </div>
  );
};
