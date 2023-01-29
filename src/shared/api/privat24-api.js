import axios from 'axios';

export const exchangeRate = async () => {
  const { data: response } = await axios.get(
    'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5'
  );
  return response;
};
