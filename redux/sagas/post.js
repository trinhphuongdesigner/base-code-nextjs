import { put, takeLeading } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { apiErrorHandler } from '../../utils';

import postApi from '../api/postApi';

import * as getUser from '../actions';
import { GET_ALL_POSTS } from '../actionTypes';

function* getAllPostsSaga(action) {
  yield put(getUser.actionGetAllPostsPending());
  try {
    const { payload } = action;

    toast.success('Get list success');
    const data = yield postApi.getAllPosts(payload);

    if (data.length) {
      yield put(getUser.actionGetAllPostsSuccess(data));
    }
  } catch (error) {
    apiErrorHandler(error);
    yield put(getUser.actionGetAllPostsFailure(error));
  }
}

export default function* sagas() {
  yield takeLeading(GET_ALL_POSTS, getAllPostsSaga);
}
