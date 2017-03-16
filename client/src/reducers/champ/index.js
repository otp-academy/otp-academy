import { combineReducers } from 'redux';

import * as Consts from '../../constants/champ';

const initialState = {
  isFetchingVersion: false,
  isFetchingChampList: false,
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
        version: action.result,
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

const champListReducer = (state = initialState, action) => {
  switch (action.type) {
    case Consts.CHAMPLIST_REQUEST:
      return {
        ...state,
        isFetchingChampList: true,
        error: null
      };
    case Consts.CHAMPLIST_SUCCESS:
      return {
        ...state,
        champList: action.result,
        isFetchingChampList: false,
        error: null
      };
    case Consts.CHAMPLIST_FAILED:
      return {
        ...state,
        isFetchingChampList: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default combineReducers({
  version: versionReducer,
  champList: champListReducer
});



