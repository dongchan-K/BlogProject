import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFiled, initializeForm, register } from '../../src/modules/auth';
import AuthForm from '../../src/components/auth/AuthForm';
import { check } from '../modules/user';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeFiled({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) return;

    dispatch(register({ username, password }));
  };

  // 최초에 form 초기화
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  // 회원가입 성공, 실패 확인
  useEffect(() => {
    if (authError) {
      console.log('회원가입 실패');
      console.log('authError', authError);
    }
    // 회원가입 성공 시 check 액션 디스패치
    if (auth) {
      console.log('회원가입 성공');
      console.log('auth', auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // 회원여부 확인 후 홈 화면 이동
  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
