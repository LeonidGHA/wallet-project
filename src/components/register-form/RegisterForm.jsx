import { useNavigate } from 'react-router-dom';

import TextFields from 'shared/text-field/TextFields';
import ButtonSubmit from 'shared/button-reuse/ButtonSubmit';
import ButtonClassic from 'shared/button-reuse/ButtonClassic';

import useForm from 'shared/hooks/useForm';

import fields from './fieldsSample';
import initialState from './initialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const navigate = useNavigate();
  const { name, email, password } = state;
  return (
    <form onSubmit={handleSubmit}>
      <TextFields value={name} handleChange={handleChange} {...fields.name} />
      <TextFields value={email} handleChange={handleChange} {...fields.email} />
      <TextFields
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <ButtonSubmit text="Регистрация" />
      <ButtonClassic text="Вход" handleClick={() => navigate('/login')} />
    </form>
  );
};

export default RegisterForm;
