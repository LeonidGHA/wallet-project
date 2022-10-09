import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import ButtonSubmit from 'shared/button-reuse/ButtonSubmit';
import ButtonClassic from 'shared/button-reuse/ButtonClassic';
import TextFields from 'shared/text-field/TextField';
import RadioInputCustom from 'shared/radio-input-custom/RadioInputCustom';

import useForm from 'shared/hooks/useForm';

import { categoryRu } from 'shared/array-for-ru/category-ru';
import initialState from './initialState';
import fields from './fieldsSample';

const TransactionForm = ({ onSubmit, onClick }) => {
  const { state, setState, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { transactionDate, type, categoryId, comment, amount } = state;

  const categories = useSelector(
    state => state.transactionCategories.categories
  );

  return (
    <form onSubmit={handleSubmit}>
      <RadioInputCustom
        value={type}
        checked={type}
        handleChange={handleChange}
        {...fields.income}
      />
      <RadioInputCustom
        value={type}
        checked={type}
        handleChange={handleChange}
        {...fields.expense}
      />
      {type === 'EXPENSE' && (
        <label>
          Выберите категорию
          <select
            name="categoryId"
            value={categoryId}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              Выберите категорию
            </option>
            {categories
              ?.filter(el => el.type === 'EXPENSE')
              .map(el => {
                const categoryTransaction = categoryRu.find(
                  elem => elem.id === el.id
                );
                return (
                  <option key={el.id} value={el.id}>
                    {categoryTransaction ? categoryTransaction.name : el.name}
                  </option>
                );
              })}
          </select>
        </label>
      )}
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={transactionDate}
        onChange={date =>
          setState(prevState => ({
            ...prevState,
            transactionDate: date,
          }))
        }
      />
      <TextFields
        value={amount}
        handleChange={handleChange}
        {...fields.amount}
      />
      <TextFields
        value={comment}
        handleChange={handleChange}
        {...fields.comment}
      />
      <ButtonSubmit text="добавить" />
      <ButtonClassic text="отмена" handleClick={onClick} />
    </form>
  );
};

export default TransactionForm;
