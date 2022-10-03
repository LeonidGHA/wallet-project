import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { refreshUser } from 'redux/auth/auth-operations';

import Header from './header/Header';
import CombineMain from './combine-main/CombineMain';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoadingUser = useSelector(state => state.auth.isLoading);
  // console.log(isLoadingUser);
  const isLogIn = useSelector(state => state.auth.isLogIn);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {isLogIn && <Header />}
      <CombineMain />
    </>
  );
};
