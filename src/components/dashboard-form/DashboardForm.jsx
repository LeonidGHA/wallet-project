import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { transactionSummaryUser } from './../../redux/transaction-summary/transactions-summary-operations';

import Select from 'react-select';

import { initialState } from './initialState';
import { fields } from './fieldsSample';
import { monthsOptionLabel, yearsOptionLabel } from './optionValue';
import css from './DashboardForm.module.scss';

const DashboardForm = () => {
  const [date, setDate] = useState(initialState);
  const dispatch = useDispatch();

  const { month, year } = date;

  useEffect(() => {
    if (date.month !== null && date.year === null) {
      return;
    }

    dispatch(transactionSummaryUser(date));
  }, [date, dispatch]);

  const handleChangeMonth = e => {
    if (e === null) {
      setDate(prevState => ({
        ...prevState,
        month: initialState.month,
      }));
      return;
    }
    const { value } = e;
    setDate(prevState => ({
      ...prevState,
      month: value,
    }));
  };
  const handleChangeYear = e => {
    if (e === null) {
      setDate(prevState => ({
        ...prevState,
        year: initialState.year,
      }));

      return;
    }

    const { value } = e;
    setDate(prevState => ({
      ...prevState,
      year: value,
    }));
  };

  return (
    <div className={css.dasboardForm_box}>
      <Select
        className="dashboard-moths_container"
        classNamePrefix="custom-select"
        defaultValue={month}
        isClearable={true}
        placeholder="Месяц"
        onChange={handleChangeMonth}
        isSearchable={true}
        name={fields.month.name}
        options={monthsOptionLabel}
      />
      <Select
        className="dashboard-year_container"
        classNamePrefix="custom-select"
        defaultValue={year}
        onChange={handleChangeYear}
        isClearable={true}
        placeholder="Год"
        isSearchable={true}
        name={fields.year.name}
        options={yearsOptionLabel}
      />
    </div>
  );
};

export default DashboardForm;
