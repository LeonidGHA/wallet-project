import { instance } from './auth-api';

export const transactionSummary = async ({ month, year } = '') => {
  const { data: result } = await instance.get('/transactions-summary', {
    params: { month, year },
  });

  // console.log(result);
  return result;
};
