import { useNavigate } from 'react-router-dom';

import Logo from 'components/logo/Logo';

import TextFields from 'shared/text-field/TextField';
import ButtonSubmit from 'shared/button-reuse/ButtonSubmit';
import ButtonClassic from 'shared/button-reuse/ButtonClassic';

import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import fieldsSample from './fieldsSample';

import css from './LoginForm.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const navigate = useNavigate();
  const { email, password } = state;
  return (
    <form className={css.login_form} onSubmit={handleSubmit}>
      <Logo />
      <TextFields
        classNameLabel={css.login_label}
        className={css.login_imput}
        value={email}
        handleChange={handleChange}
        {...fieldsSample.email}
      >
        <div className={css.login_label_emailIcon}></div>
      </TextFields>
      <TextFields
        classNameLabel={css.login_label}
        className={css.login_imput}
        value={password}
        handleChange={handleChange}
        {...fieldsSample.password}
      >
        <div className={css.login_label_passwordIcon}></div>
      </TextFields>
      <ButtonSubmit text="Вход" className={css.login_btn_login} />
      <ButtonClassic
        className={css.login_btn_registration}
        text="Регистрация"
        handleClick={() => navigate('/registration')}
      />
    </form>
  );
};
export default LoginForm;
