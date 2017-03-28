import * as Consts from '../constants/user';

export const requestAddChamp = (userId, champion) => ({type: Consts.ADDCHAMP_REQUEST, userId, champion});
export const addChampSuccess = (result) => ({type: Consts.ADDCHAMP_SUCCESS, result});
export const addChampFailed = error => ({type: Consts.ADDCHAMP_FAILED, error});