import { combineReducers } from 'redux';
import { takeLatest, select } from 'redux-saga/effects';

import setups from './setups';
import ui from './ui';
import { sendDataToFirebase } from '../utils/api';

export const SET_STATE = 'home-helper/root/SET_STATE';

const appReducer = combineReducers({ setups, ui });

const rootReducer = (state, action) => {
  switch (action.type) {
    case SET_STATE: {
      return action.data;
    }

    default: {
      return appReducer(state, action);
    }
  }
};

export const setState = data => ({
  type: SET_STATE,
  data,
});

function* logActions() {
  const state = yield select();
  return sendDataToFirebase(state);
}

export function* rootStateSaga() {
  yield takeLatest(action => action.type !== SET_STATE, logActions);
}

export default rootReducer;
