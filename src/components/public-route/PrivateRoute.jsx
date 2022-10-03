import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isLogIn = useSelector(state => state.auth.isLogIn);

  if (isLogIn) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
