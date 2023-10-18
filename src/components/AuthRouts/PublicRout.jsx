import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const token = useSelector(state => state.loginUser.user.token);
  return token ? <Navigate to="/contacts" replace /> : <Outlet />;
};
