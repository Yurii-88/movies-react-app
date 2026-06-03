import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

export default function ProtectedLayout() {
  const { loading, user } = useAuth();

  if (loading) return null;

  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
}
