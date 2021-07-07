import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../src/modules/auth';
import AuthForm from '../../src/components/auth/AuthForm';
import { useHistory } from 'react-router-dom';
import { check } from '../modules/user';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [error, setError] = useState(null);

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  // 최초에 로그인 폼 초기화
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  // 로그인 성공, 실패 확인
  useEffect(() => {
    // 로그인 실패
    if (authError) {
      setError('존재하지 않는 계정이거나, 잘못된 비밀번호입니다.');
    }
    // 로그인 성공 시 check 액션 디스패치 -> 로그인 상태 확인
    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // 로그인 되어있다면 홈 화면으로 이동
  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log(e);
      }
    }
  }, [history, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginForm;
