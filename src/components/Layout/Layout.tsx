import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import classes from './Layout.module.scss';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import cartIcon from '../../assets/cart.svg';
import { CartDrawer } from '../CartDrawer/CartDrawer';

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dashboard');
    }
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Link className={classes.brand} to='/dashboard'>
          <Text color='white' size='great'>
            MKS
          </Text>
          <Text color='white'>Sistemas</Text>
        </Link>
        <Button
          onClick={() => {
            setOpenDrawer(!openDrawer);
          }}
          textColor='black'
          color='white'
          type='rectangle'
          icon={cartIcon}
          text='0'
          textSize='medium'
        />
      </div>
      <CartDrawer value={324.0} isOpen={openDrawer} onClose={() => setOpenDrawer(false)} />
      <Outlet />
    </div>
  );
};
