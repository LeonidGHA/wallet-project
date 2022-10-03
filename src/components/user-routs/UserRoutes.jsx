import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import PrivateRoute from 'components/public-route/PrivateRoute';
import PublicRoute from 'components/private-route/PublicRoute';

const Main = lazy(() => import('pages/main/MainPage'));
const LogIn = lazy(() => import('pages/login/LoginPage'));
const Register = lazy(() => import('pages/registration/RegistrationPage'));
const Dasboard = lazy(() => import('pages/dashboard/DasboardPage'));

const UserRoutes = () => {
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
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
