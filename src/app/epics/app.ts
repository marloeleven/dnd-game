import { Action } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { push } from 'connected-react-router';

import { combineEpics, Epic, ofType } from 'redux-observable';
import { of, defer, empty } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

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

const setGameEpic: Epic<Action, Action, RootState> = (action$, state$) =>
  action$.pipe(
    ofType(appActions.setGame),
    map((data) => (data as ISetGameArgs).payload),
    switchMap((type) => of(push(`/${type}`)))
  );

/*
Sample page redirection after triggering an action

const setPagesEpic: Epic<Action, Action, RootState> = (action$, state$) =>
  action$.pipe(
    ofType(appActions.setPages),
    switchMap(() => of(push('/pages')))
  );


Sample
const setPageIdEpic: Epic<Action, Action, RootState> = (action$, state$) =>
  action$.pipe(
    ofType(appActions.setPageId),
    switchMap(() =>
      defer(() => {
        const { pageId, pageAccessToken: accessToken } = state$.value.app;

        if (!isEmpty(pageId)) {
          return fbApi.getLiveVideos(pageId, accessToken);
        }

        return [];
      }).pipe(
        switchMap((liveVideos) => {
          return of(appActions.setLiveVideos(liveVideos));
        })
      )
    )
  );

*/

export default combineEpics(setLoginEpic, setGameEpic);
