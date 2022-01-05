import {
  GET_USERS,
  GET_USERS_FAILURE,
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
} from 'redux/actionTypes';

export const actionGetUsers = () => ({
  type: GET_USERS,
});

export const actionGetUserPending = () => ({
  type: GET_USERS_PENDING,
});

export const actionGetUserSuccess = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const actionGetUserFailure = (payload) => ({
  type: GET_USERS_FAILURE,
  payload,
});
