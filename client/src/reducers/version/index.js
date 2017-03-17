import * as Consts from '../../constants/champ';

const initialState = {
  isFetching: false,
  data: "",
  error: null
};

const versionReducer = (state = initialState, action) => {
  switch (action.type) {
    case Consts.VERSION_REQUEST:
      return {
        ...state,
        isFetchingVersion: true,
        error: null
      };
    case Consts.VERSION_SUCCESS:
      return {
        ...state,
        data: action.result,
        isFetchingVersion: false,
        error: null
      };
    case Consts.VERSION_FAILED:
      return {
        ...state,
        isFetchingVersion: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default versionReducer;