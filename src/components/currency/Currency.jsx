import { useState, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { exchangeRate } from 'shared/api/privat24-api';
import css from './Currency.module.scss';

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
        <li key={nanoid()} className={css.currency_coin_item}>
          <span>{ccy}</span>
          <span>{Number(buy).toFixed(2)}</span>
          <span>{Number(sale).toFixed(2)}</span>
        </li>
      );
    });

  return (
    <div className={css.currency_box}>
      <ul className={css.currency_title_list}>
        <li className={css.currency_title_item}>Валюта</li>
        <li className={css.currency_title_item}>Покупка</li>
        <li className={css.currency_title_item}>Продажа</li>
      </ul>
      <ul className={css.currency_coin_list}>
        {currencyRate.length > 0 ? (
          renderCurencyRate
        ) : (
          <>
            <li className={css.currency_coin_item}>
              <span>---</span>
              <span>--.--</span>
              <span>--.--</span>
            </li>
            <li className={css.currency_coin_item}>
              <span>---</span>
              <span>--.--</span>
              <span>--.--</span>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Currency;
