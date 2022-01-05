import { all, fork } from 'redux-saga/effects';

import postSaga from './sagas/post';

export default function* rootSagas() {
  yield all([
    fork(postSaga),
  ]);
}
