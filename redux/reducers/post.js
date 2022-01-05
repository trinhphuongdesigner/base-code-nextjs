import {
  GET_POSTS_FAILURE,
  GET_POSTS_PENDING,
  GET_POSTS_SUCCESS,
} from '../actionTypes';

const defaultState = {
  data: [],
  isLoading: false,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_POSTS_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case GET_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
