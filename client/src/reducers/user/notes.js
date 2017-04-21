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
        ...getNotes(action.result.notes)
      };
    case ConstsUser.UPDATENOTES_SUCCESS:
      return action.result;
    case ConstsAuth.SESSION_FAILED:
    case ConstsAuth.LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};

const getNotes = (notes) => {
  if (notes) {
    return JSON.parse(notes);
  }
  return null;
}