import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import produce from 'immer';
import { GAME_TYPES } from 'types';

interface AppState {
  loggedIn: boolean;
  accessToken: string;
}

const initialState: AppState = {
  loggedIn: false,
  accessToken: '',
};

interface ISetLoginStateArgs {
  accessToken: string;
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoginState: (
      state,
      { payload: { accessToken } }: PayloadAction<ISetLoginStateArgs>
    ) => {
      return produce(state, (draft) => {
        draft.accessToken = accessToken;
        draft.loggedIn = true;
      });
    },
    setGame: (state, { payload }: PayloadAction<GAME_TYPES>) => {},
  },
});

export const { setLoginState, setGame } = appSlice.actions;

export const get = {
  loggedIn: (state: RootState) => state.app.loggedIn,
};

export default appSlice.reducer;
