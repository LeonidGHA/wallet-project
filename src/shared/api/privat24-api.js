import axios from 'axios';

export const exchangeRate = async () => {
  const { data: response } = await axios.get(
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
  );
  // console.log(response);
  return response;
};
