import { useState, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { exchangeRate } from 'shared/api/privat24-api';

const Currency = () => {
  const [currencyRate, setCurrencyRate] = useState([]);

  useEffect(() => {
    takeExchangeRate();
  }, []);
  const takeExchangeRate = async () => {
    try {
      const exchangeRateValue = await exchangeRate();
      setCurrencyRate(exchangeRateValue);
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderCurencyRate = currencyRate
    ?.filter(el => el.base_ccy === 'UAH')
    .map(({ ccy, buy, sale }) => {
      return (
        <tr key={nanoid()}>
          <td>{ccy}</td>
          <td>{Number(buy).toFixed(2)}</td>
          <td>{Number(sale).toFixed(2)}</td>
        </tr>
      );
    });

  return (
    <table>
      <tbody>
        <tr>
          <th>Валюта</th>
          <th>Покупка</th>
          <th>Продажа</th>
        </tr>
        {currencyRate.length > 0 ? (
          renderCurencyRate
        ) : (
          <tr>
            <td>--</td>
            <td>--.--</td>
            <td>--.--</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Currency;
