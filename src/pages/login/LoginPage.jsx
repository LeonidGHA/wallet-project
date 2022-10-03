import { useDispatch } from 'react-redux';

import LoginForm from 'components/login-form/LoginForm';
import { logInUser } from 'redux/auth/auth-operations';
// import css from './LoginPage.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const logInFetch = data => {
    console.log(data);
    dispatch(logInUser(data));
  };
  return (
    <>
      Login
      <LoginForm onSubmit={logInFetch} />
    </>
  );
};

export default LoginPage;
