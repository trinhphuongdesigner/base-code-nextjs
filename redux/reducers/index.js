import { combineReducers } from 'redux';

import postsReducer from './post';

const appReducer = combineReducers({
  postsState: postsReducer,
});

export default appReducer;
