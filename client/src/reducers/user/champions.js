import * as ConstsAuth from 'Constants/auth';
import * as ConstsUser from 'Constants/user';


const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ConstsAuth.LOGIN_SUCCESS:
    case ConstsAuth.SIGN_UP_SUCCESS:
    case ConstsAuth.SESSION_SUCCESS:
    case ConstsUser.ADDCHAMP_SUCCESS:
      return {
        ...state,
        ...action.result.champions
      };
    case ConstsAuth.LOGIN_FAILED:
    case ConstsAuth.SIGN_UP_FAILED:
    case ConstsAuth.SESSION_FAILED:
    case ConstsUser.ADDCHAMP_FAILED:
      return {};
    default:
      return state;
  }
};