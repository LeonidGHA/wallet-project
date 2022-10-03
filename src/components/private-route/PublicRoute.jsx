import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLogIn = useSelector(state => state.auth.isLogIn);

  if (isLogIn) {
    return <Navigate to="/main" />;
  }
  return <Outlet />;
};

export default PublicRoute;
