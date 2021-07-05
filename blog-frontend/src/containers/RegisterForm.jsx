import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFiled, initializeForm, register } from '../../src/modules/auth';
import AuthForm from '../../src/components/auth/AuthForm';
import { check } from '../modules/user';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [error, setError] = useState(null);

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
    // 아이디가 입력되지 않은 경우 에러처리
    if ([username].includes('')) {
      setError('아이디를 입력해주세요');
      return;
    }
    // 비밀번호가 입력되지 않은 경우 에러처리
    if ([password].includes('')) {
      setError('비밀번호를 입력해주세요');
      return;
    }
    // 비밀번호 확인창이 입력되지 않은 경우 에러처리
    if ([passwordConfirm].includes('')) {
      setError('비밀번호를 확인해주세요');
      return;
    }
    // 비밀번호가 일치하지 않는 경우 에러처리
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다');
      dispatch(changeFiled({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeFiled({ form: 'register', key: 'passwordConfirm', value: '' }),
      );
      return;
    }

    dispatch(register({ username, password }));
  };

  // 최초에 회원가입 폼 초기화
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  // 회원가입 성공, 실패 확인
  useEffect(() => {
    if (authError) {
      // 중복계정 에러처리
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정입니다');
        return;
      }
      // 기타 에러처리
      setError('회원가입 실패');
      return;
    }
    // 회원가입 성공 시 check 액션 디스패치 -> 로그인 상태 확인
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
  }, [user, history]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterForm;
