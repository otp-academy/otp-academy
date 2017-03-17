import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import * as Api from '../api/champ';
import * as Actions from '../actions/champ';
import * as Consts from '../constants/champ';

function* requestChampList(action) {
  try {
    const result = yield call(Api.requestChampList);
    const result2 = yield call(Api.requestVersion)
    yield put(Actions.versionSuccess(result2));
    result.version = result2;
    yield put(Actions.champListSuccess(result));
  } catch (error) {
    yield put(Actions.champListFailed(error));
  }
}

function* requestVersion(action) {
  try {
    const result = yield call(Api.requestVersion);
    yield put(Actions.versionSuccess(result));
  } catch (error) {
    yield put(Actions.versionFailed(error));
  }
}

export default function* watchChamp() {
  yield [
    takeLatest(Consts.CHAMPLIST_REQUEST, requestChampList),
    takeLatest(Consts.VERSION_REQUEST, requestVersion)
  ];
}