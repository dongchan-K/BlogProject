import client from './client';

// 로그인
export const login = ({ username, password }) =>
  client.post('api/auth/login', { username, password });

// 회원가입
export const register = ({ username, password }) => {
  console.log(username, password);
  return client.post('api/auth/register', { username, password });
};

// 로그인 확인
export const check = () => client.get('api/auth/check');

export const logout = () => client.post('api/auth/logout');
