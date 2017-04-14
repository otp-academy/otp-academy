import * as Consts from 'constants/auth';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case Consts.LOGIN_SUCCESS:
    case Consts.SIGN_UP_SUCCESS:
    case Consts.SESSION_SUCCESS:
      return {
        ...state,
        ...getNotes(action.result.notes)
      };
    case Consts.LOGIN_FAILED:
    case Consts.SIGN_UP_FAILED:
    case Consts.SESSION_FAILED:
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