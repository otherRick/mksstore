import { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dashboard');
    }
  }, []);
  return (
    <div>
      <Link to='/dashboard'>
        <p>Dashboard</p>
      </Link>
      <Outlet />
    </div>
  );
};
