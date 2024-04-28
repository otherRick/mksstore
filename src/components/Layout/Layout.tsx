import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import classes from './Layout.module.scss';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import cartIcon from '../../assets/cart.svg';
import { CartDrawer } from '../CartDrawer/CartDrawer';
import { useCartContext } from '../../contexts/CartContext/useCartContext';

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);
  const { getCartTotalProducts } = useCartContext();

  const openDrawerHandler = () => setOpenDrawer(!openDrawer);

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dashboard');
    }
  }, [navigate, location]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Link role='link' className={classes.brand} to='/dashboard'>
          <Text color='white' size='great'>
            MKS
          </Text>
          <Text color='white'>Sistemas</Text>
        </Link>
        <Button
          disabled={!getCartTotalProducts()}
          onClick={openDrawerHandler}
          textColor='black'
          color='white'
          type='rectangle'
          icon={cartIcon}
          text={String(getCartTotalProducts())}
          textSize='medium'
        />
      </div>
      <CartDrawer isOpen={openDrawer} onClose={() => setOpenDrawer(false)} />
      <Outlet />
    </div>
  );
};
