import { combineReducers } from 'redux';

import profile from './profile';
import champions from './champions';
import notes from './notes';

export default combineReducers({
  profile,
  champions,
  notes
});