import { all } from 'redux-saga/effects';

import rootReducer, { rootStateSaga } from './root';

export default rootReducer;

export function* rootSaga() {
  yield all([rootStateSaga()]);
}
