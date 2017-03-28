import * as Consts from 'Constants/auth';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case Consts.LOGIN_SUCCESS:
    case Consts.SIGN_UP_SUCCESS:
    case Consts.SESSION_SUCCESS:
      return {
        ...state,
        // ...action.result.profile
      };
    case Consts.LOGIN_FAILED:
    case Consts.SIGN_UP_FAILED:
    case Consts.SESSION_FAILED:
      return {};
    default:
      return state;
  }
};