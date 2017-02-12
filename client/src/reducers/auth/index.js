import { combineReducers } from 'redux';

import login from './login';
import signUp from './signUp';
import * as Consts from '../../constants/auth';

const initialState = {
  username: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Consts.LOGIN_SUCCESS:
    case Consts.SIGN_UP_SUCCESS:
      return {
        ...state,
        username: action.user.username
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



