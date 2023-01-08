import { Action } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import { combineEpics, Epic, ofType } from 'redux-observable';
import { defer, empty } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import * as appActions from 'app/slices/app';
import { GAME_TYPES } from 'types';

const setLoginEpic: Epic<Action, Action, RootState> = (action$, state$) =>
  action$.pipe(
    ofType(appActions.setLoginState),
    switchMap(() =>
      defer(() => Promise.resolve(true)).pipe(switchMap(() => empty()))
    )
  );

interface ISetGameArgs {
  type: string;
  payload: GAME_TYPES;
}

export default combineEpics(setLoginEpic);
