import { combineReducers } from 'redux';

import login from './login';
import signUp from './signUp';
import * as Consts from '../../constants/auth';

const initialState = {
  user: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Consts.LOGIN_SUCCESS:
    case Consts.SIGN_UP_SUCCESS:
    case Consts.SESSION_SUCCESS:
      return {
        ...state,
        user: action.result.user
      };
    case Consts.LOGIN_FAILED:
    case Consts.SIGN_UP_FAILED:
    case Consts.SESSION_FAILED:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  login,
  signUp
});



