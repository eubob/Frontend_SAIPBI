import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function PrivateRoute() {
  const { authenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="session-loading">Carregando sessão...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
