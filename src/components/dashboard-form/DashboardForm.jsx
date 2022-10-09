import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { transactionSummaryUser } from './../../redux/transaction-summary/transactions-summary-operations';

import Select from 'react-select';

import { initialState } from './initialState';
import { fields } from './fieldsSample';
import { monthsOptionLabel, yearsOptionLabel } from './optionValue';

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
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={month}
        isClearable={true}
        onChange={handleChangeMonth}
        isSearchable={true}
        name={fields.month.name}
        options={monthsOptionLabel}
      />
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={year}
        onChange={handleChangeYear}
        isClearable={true}
        isSearchable={true}
        name={fields.year.name}
        options={yearsOptionLabel}
      />
    </>
  );
};

export default DashboardForm;
