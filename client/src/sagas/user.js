import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import * as Api from '../api/user';
import * as Actions from 'actions/user';
import * as Consts from '../constants/user';

function* requestAddChamp(action) {
  try {
    const result = yield call(Api.requestAddChamp, action.userId, action.champion);
    yield put(Actions.addChampSuccess(result));
  } catch (error) {
    yield put(Actions.addChampFailed(error));
  }
}

function* requestDeleteChamp(action) {
  try {
    const result = yield call(Api.requestDeleteChamp, action.userId, action.champion);
    yield put(Actions.deleteChampSuccess(result));
  } catch (error) {
    yield put(Actions.deleteChampFailed(error));
  }
}

function* requestUpdateNotes(action) {
  try {
    const result = yield call(Api.requestUpdateNotes, action.userId, action.notes);
    yield put(Actions.updateNotesSuccess(result));
  } catch (error) {
    yield put(Actions.updateNotesFailed(error));
  }
}

export default function* watchUser() {
  yield [
    takeLatest(Consts.ADDCHAMP_REQUEST, requestAddChamp),
    takeLatest(Consts.DELETECHAMP_REQUEST, requestDeleteChamp),
    takeLatest(Consts.UPDATENOTES_REQUEST, requestUpdateNotes)
  ];
}