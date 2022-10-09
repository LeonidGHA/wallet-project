import { instance } from './auth-api';

export const transactionCategories = async () => {
  const { data: result } = await instance.get('/transaction-categories');
  console.log(result);
  return result;
};
