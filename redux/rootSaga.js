import { all, fork } from 'redux-saga/effects';

import demo from './sagas/demo';

export default function* rootSagas() {
  yield all([
    fork(demo),
  ]);
}
