import * as ConstsAuth from 'constants/auth';
import * as ConstsUser from 'constants/user';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ConstsAuth.LOGIN_SUCCESS:
    case ConstsAuth.SIGN_UP_SUCCESS:
    case ConstsAuth.SESSION_SUCCESS:
      return {
        ...state,
        ...action.result.champions
      };
    case ConstsUser.ADDCHAMP_SUCCESS:
      return {
        ...state,
        ...action.result
      };
    case ConstsUser.DELETECHAMP_SUCCESS:
      return action.result;
    case ConstsUser.LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};