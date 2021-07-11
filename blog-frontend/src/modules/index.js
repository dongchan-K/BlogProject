import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import loading from './loading';
import write, { writeSaga } from './wrtie';
import post, { postSaga } from './post';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
  user,
  loading,
  write,
  post,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga()]); // all 이펙트는 배열안에 넣어준 saga를 병렬적으로 처리
}

export default rootReducer;
