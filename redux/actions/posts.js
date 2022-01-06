import {
  GET_ALL_POSTS,
  GET_ALL_POSTS_PENDING,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILURE,
} from '../actionTypes';

export const actionGetAllPosts = () => ({
  type: GET_ALL_POSTS,
});

export const actionGetAllPostsPending = () => ({
  type: GET_ALL_POSTS_PENDING,
});

export const actionGetAllPostsSuccess = (payload) => ({
  type: GET_ALL_POSTS_SUCCESS,
  payload,
});

export const actionGetAllPostsFailure = (payload) => ({
  type: GET_ALL_POSTS_FAILURE,
  payload,
});
