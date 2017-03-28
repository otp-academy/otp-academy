import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import * as Api from '../api/user';
import * as Actions from 'Actions/user';
import * as Consts from '../constants/user';

function* requestAddChamp(action) {
  try {
    const result = yield call(Api.requestAddChamp, action.userId, action.champion);
    yield put(Actions.addChampSuccess(result));
  } catch (error) {
    yield put(Actions.addChampFailed(error));
  }
}

export default function* watchUser() {
  yield [
    takeLatest(Consts.ADDCHAMP_REQUEST, requestAddChamp),
  ];
}