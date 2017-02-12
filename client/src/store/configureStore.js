import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';


export default (history) => {

  const enhancers = applyMiddleware(createLogger(), routerMiddleware(history));

  return createStore(rootReducer, enhancers);
}