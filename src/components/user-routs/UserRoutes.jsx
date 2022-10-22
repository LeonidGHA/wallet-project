import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import useResizeScreen from 'shared/hooks/useResizeScreen';
import PrivateRoute from 'components/private-route/PrivateRoute';
import PublicRoute from 'components/public-route/PublicRoute';

const Main = lazy(() => import('pages/main/MainPage'));
const LogIn = lazy(() => import('pages/login/LoginPage'));
const Register = lazy(() => import('pages/registration/RegistrationPage'));
const Dasboard = lazy(() => import('pages/dashboard/DasboardPage'));
const CurrencyPage = lazy(() => import('pages/currency/CurrencyPage'));

const UserRoutes = () => {
  const { isMobile } = useResizeScreen()
  return (
    <Suspense>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LogIn />} />
          <Route path="/registration" element={<Register />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/dashboard" element={<Dasboard />} />
          {isMobile && <Route path="/currency" element={<CurrencyPage />} />}
        </Route>
        <Route path='*' element={<div>Not found page...</div>} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
