import { instance } from './auth-api';

export const transactionPost = async data => {
  const { data: result } = await instance.post('/transactions', data);

  // console.log(result);
  return result;
};

export const transactionGet = async () => {
  const { data: result } = await instance.get('/transactions');
  // console.log(result);
  return result;
};

export const transactionPatch = async id => {
  const { data: result } = await instance.patch(`/transactions${id}`);

  // console.log(result);
  return result;
};

export const transactionDelete = async id => {
  await instance.delete(`/transactions/${id}`);
  // console.log(result);
  return id;
};
