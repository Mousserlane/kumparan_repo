import {createStore, combineReducers, applyMiddleware} from 'redux';

import logger from 'redux-logger';

import commentsReducer from "./Reducers/commentsReducer";
import postsReducer from "./Reducers/postsReducer";
import interactionReducer from "./Reducers/interactionReducer";

export default createStore(
  combineReducers({
    commentsReducer,
    postsReducer,
    interactionReducer}),
    {},
    applyMiddleware(logger)
  );
