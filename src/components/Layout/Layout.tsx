import { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import classes from './Layout.module.scss';

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dashboard');
    }
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Link to='/dashboard'>
          <p>Dashboard</p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
