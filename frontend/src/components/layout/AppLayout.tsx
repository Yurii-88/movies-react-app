import { Outlet } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import Footer from './Footer';
import Header from './Header';

export default function AppLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Outlet />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
