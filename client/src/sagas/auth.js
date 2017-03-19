import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import * as Api from '../api/auth';
import * as Actions from 'Actions/auth';
import * as Consts from '../constants/auth';

function* requestLogin(action) {
  try {
    const result = yield call(Api.requestLogin, action.loginInfo);
    yield put(Actions.loginSuccess(result));
  } catch (error) {
    yield put(Actions.loginFailed(error));
  }
}

function* requestSignUp(action) {
  try {
    const result = yield call(Api.requestSignUp, action.signUpInfo);
    yield put(Actions.signUpSuccess(result));
  } catch (error) {
    yield put(Actions.signUpFailed(error));
  }
}

function* requestSession(action) {
  try {
    const result = yield call(Api.requestSession);
    yield put(Actions.sessionSuccess(result));
  } catch (error) {
    yield put(Actions.sessionFailed(error));
  }
}

export default function* watchAuth() {
  yield [
    takeLatest(Consts.LOGIN_REQUEST, requestLogin),
    takeLatest(Consts.SIGN_UP_REQUEST, requestSignUp),
    takeLatest(Consts.SESSION_REQUEST, requestSession)
  ];
}