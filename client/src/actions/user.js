import * as Consts from '../constants/user';

export const requestAddChamp = (userId, champion) => ({type: Consts.ADDCHAMP_REQUEST, userId, champion});
export const addChampSuccess = result => ({type: Consts.ADDCHAMP_SUCCESS, result});
export const addChampFailed = error => ({type: Consts.ADDCHAMP_FAILED, error});

export const requestDeleteChamp = (userId, champion) => ({type: Consts.DELETECHAMP_REQUEST, userId, champion});
export const deleteChampSuccess = result => ({type: Consts.DELETECHAMP_SUCCESS, result});
export const deleteChampFailed = error => ({type: Consts.DELETECHAMP_FAILED, error});