import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AdminRoute() {
  const { loading, isAdministrador } = useAuth();
  if (loading) return null;
  if (!isAdministrador) return <Navigate to="/app/403" replace />;
  return <Outlet />;
}
