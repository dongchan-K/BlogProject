import { call, put } from 'redux-saga/effects';
import { startLoading, endLoading } from '../modules/loading';

export default function createRequestSage(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const res = yield call(request, action.payload);

      yield put({
        type: SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(endLoading(type)); // 로딩 완료
  };
}
