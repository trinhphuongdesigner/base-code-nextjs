import { put, takeLeading } from 'redux-saga/effects';
import { apiErrorHandler } from '../../utils';

import postApi from '../api/postApi';

import * as getUser from '../actions';
import { GET_POSTS } from '../actionTypes';

function* getAllPostsSaga(action) {
  yield put(getUser.actionGetUserPending());
  try {
    const { payload } = action;

    const { data } = yield postApi.getAllPosts(payload);

    if (data.length) {
      yield put(getUser.actionGetUserSuccess(data[0]));
    }
  } catch (error) {
    apiErrorHandler(error);
    yield put(getUser.actionGetUserFailure(error));
  }
}

export default function* sagas() {
  yield takeLeading(GET_POSTS, getAllPostsSaga);
}
