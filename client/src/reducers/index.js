import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import champ from './champ';
import version from './version';

export default combineReducers({
  auth,
  champ,
  version,
  routing: routerReducer
});