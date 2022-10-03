import { useNavigate } from 'react-router-dom';

import TextFields from 'shared/text-field/TextFields';
import ButtonSubmit from 'shared/button-reuse/ButtonSubmit';
import ButtonClassic from 'shared/button-reuse/ButtonClassic';

import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import fieldsSample from './fieldsSample';

// import css from './LoginForm.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const navigate = useNavigate();
  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit}>
      <TextFields
        value={email}
        handleChange={handleChange}
        {...fieldsSample.email}
      />
      <TextFields
        value={password}
        handleChange={handleChange}
        {...fieldsSample.password}
      />
      <ButtonSubmit text="Вход" />
      <ButtonClassic
        text="Регистрация"
        handleClick={() => navigate('/registration')}
      />
    </form>
  );
};
export default LoginForm;
