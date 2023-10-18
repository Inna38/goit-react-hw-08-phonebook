import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const token = useSelector(state => state.loginUser.user.token);
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
