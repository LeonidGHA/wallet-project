import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Logo from 'components/logo/Logo';
import TextFields from 'shared/text-field/TextField';
import ButtonSubmit from 'shared/button-reuse/ButtonSubmit';
import ButtonClassic from 'shared/button-reuse/ButtonClassic';

import useForm from 'shared/hooks/useForm';

import fields from './fieldsSample';
import initialState from './initialState';

import css from './RegisterForm.module.scss';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { name, email, password } = state;

  const handleConfirmPassword = ({ target }) => {
    setConfirmPassword(target.value);
  };
  return (
    <form className={css.registration_form} onSubmit={handleSubmit}>
      <Logo />
      <TextFields
        classNameLabel={css.registration_label}
        className={css.registration_imput}
        value={email}
        handleChange={handleChange}
        {...fields.email}
      >
        <div className={css.registration_label_emailIcon}></div>
      </TextFields>
      <TextFields
        classNameLabel={css.registration_label}
        className={css.registration_imput}
        value={password}
        handleChange={handleChange}
        {...fields.password}
      >
        <div className={css.registration_label_passwordIcon}></div>
      </TextFields>
      <TextFields
        classNameLabel={css.registration_label}
        className={css.registration_imput}
        value={confirmPassword}
        handleChange={handleConfirmPassword}
        {...fields.confirmPassword}
      >
        <div className={css.registration_label_passwordIcon}></div>
      </TextFields>
      <TextFields
        classNameLabel={css.registration_label}
        className={css.registration_imput}
        value={name}
        handleChange={handleChange}
        {...fields.name}
      >
        <div className={css.registration_label_userNameIcon}></div>
      </TextFields>
      <ButtonSubmit className={css.registration_btn_login} text="Регистрация" />
      <ButtonClassic
        className={css.registration_btn_registration}
        text="Вход"
        handleClick={() => navigate('/login')}
      />
    </form>
  );
};

export default RegisterForm;
