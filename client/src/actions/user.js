import * as Consts from '../constants/user';

export const requestUserInfo = () => ({type: Consts.USERINFO_REQUEST});
export const userInfoSuccess = (result) => ({type: Consts.USERINFO_SUCCESS, result});
export const userInfoFailed = error => ({type: Consts.USERINFO_FAILED, error});