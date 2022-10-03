import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/auth-operations';

import RegisterForm from 'components/register-form/RegisterForm';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const registerFetch = data => {
    console.log(data);
    dispatch(registerUser(data));
  };
  return (
    <div>
      Registration
      <RegisterForm onSubmit={registerFetch} />
    </div>
  );
};

export default RegistrationPage;
