import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://wallet.goit.ua/api',
});

export const setToken = (accessToken = '') => {
  instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
};

export const registration = async data => {
  const { data: result } = await instance.post('/auth/sign-up', data);
  setToken(result.token);
  // console.log(result);
  return result;
};

export const logIn = async data => {
  const { data: result } = await instance.post('/auth/sign-in', data);
  setToken(result.token);
  return result;
};

export const logOut = async () => {
  const { data: result } = await instance.delete('/auth/sign-out');
  setToken('');
  // console.log(result);
  return result;
};

export const refresh = async () => {
  const { data: result } = await instance.get('/users/current');
  // console.log(result);
  return result;
};
