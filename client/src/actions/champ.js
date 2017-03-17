import * as Consts from '../constants/champ';

export const requestChampList = () => ({type: Consts.CHAMPLIST_REQUEST});
export const champListSuccess = result => ({type: Consts.CHAMPLIST_SUCCESS, result});
export const champListFailed = error => ({type: Consts.CHAMPLIST_FAILED, error});

export const requestVersion = () => ({type: Consts.VERSION_REQUEST});
export const versionSuccess = result => ({type: Consts.VERSION_SUCCESS, result});
export const versionFailed = error => ({type: Consts.VERSION_FAILED, error});