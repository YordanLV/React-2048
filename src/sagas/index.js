/* eslint-disable no-constant-condition */

import { put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga';

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'ADD_COUNTER' })
  yield delay(1000)
  yield put({ type: 'MUL_COUNTER' })

}

export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}