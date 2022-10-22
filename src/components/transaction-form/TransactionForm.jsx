import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

import ButtonSubmit from 'shared/button-reuse/ButtonSubmit';
import ButtonClassic from 'shared/button-reuse/ButtonClassic';
import TextFields from 'shared/text-field/TextField';
import RadioInputCustom from 'shared/radio-input-custom/RadioInputCustom';

import useForm from 'shared/hooks/useForm';

import { categoryRu } from 'shared/array-for-ru/category-ru';
import initialState from './initialState';
import fields from './fieldsSample';
import css from './TransactionForm.module.scss'

const TransactionForm = ({ onSubmit, onClick }) => {
  const { state, setState, handleChange, handleChangeSelect, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { transactionDate, type, categoryId, comment, amount } = state;

  const categories = useSelector(
    state => state.transactionCategories.categories
  );

  const optionCategories = categories
    ?.filter(el => el.type === 'EXPENSE')
    .map(el => {
      const categoryTransaction = categoryRu.find(
        elem => elem.id === el.id
      );
      return (
        {
          value: el.id,
          label: categoryTransaction ? categoryTransaction.name : el.name,
          name: `categoryId`,
        }
      );
    })
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.form_title}>Добавить транзакцию</h2>
      <div className={css.form_radio_switch}><RadioInputCustom
        classNameLabel={`${css.form_radio_label} ${css.income}`}
        className={`${css.form_radio_input} ${css.income}`}
        value={type}
        checked={type}
        handleChange={handleChange}
        {...fields.income}
      />

        <RadioInputCustom
          classNameLabel={`${css.form_radio_label} ${css.expense}`}
          className={`${css.form_radio_input} ${css.expense}`}
          value={type}
          checked={type}
          handleChange={handleChange}
          {...fields.expense}
        ><div className={css.slider}></div></RadioInputCustom>
      </div>

      {type === 'EXPENSE' && (
        <label className={css.form_label_category}>
          <Select
            className="transaction_container"
            classNamePrefix="custom-select"
            defaultValue={categoryId}
            onChange={handleChangeSelect}
            isClearable={true}
            placeholder="Выберите категорию"
            required={true}
            isSearchable={true}
            name={categoryId}
            options={optionCategories} />
        </label>
      )
      }
      <div className={css.form_position_field}>
        <TextFields
          className={css.form_amount}
          value={amount}
          handleChange={handleChange}
          {...fields.amount}
        />
        <DatePicker
          className={css.form_datepicker}
          dateFormat="yyyy-MM-dd"
          selected={transactionDate}
          onChange={date =>
            setState(prevState => ({
              ...prevState,
              transactionDate: date,
            }))
          }
        />
      </div>

      <TextFields
        classNameLabel={css.form_comment_label}
        className={css.form_comment}
        value={comment}
        handleChange={handleChange}
        {...fields.comment}
      />
      <div className={css.form_position_btn}> <ButtonSubmit text="добавить" />
        <ButtonClassic text="отмена" handleClick={onClick} /></div>

    </form >
  );
};

export default TransactionForm;
