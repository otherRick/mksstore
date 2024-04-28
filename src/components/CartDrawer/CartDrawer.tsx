import { useCartContext } from '../../contexts/CartContext/useCartContext';
import { Button } from '../Button/Button';
import { CartProductCard } from '../CartProductCard/CartProductCard';
import { Text } from '../Text/Text';
import classes from './CartDrawer.module.scss';
import { AnimatePresence } from 'framer-motion';

interface ICartDrawer {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: ICartDrawer) => {
  const { cart, getCartTotalPrice, updateCartProductQuantity, removeCartProduct } =
    useCartContext();
  const fomrattedValue = new Intl.NumberFormat('pt-BR').format(getCartTotalPrice());

  const handleClose = () => {
    onClose();
  };

  const handleAddProduct = (productId: number) => updateCartProductQuantity(productId, 'add');

  const handleSubtractProduct = (productId: number) =>
    updateCartProductQuantity(productId, 'subtract');

  const onRemoveProduct = (productId: number) => {
    removeCartProduct(productId);
  };

  return (
    <div className={`${classes.container} ${isOpen ? classes.open : ''}`}>
      <div className={isOpen ? classes.overlay : ''} onClick={handleClose}></div>
      <div className={classes.drawer}>
        <div className={classes.items}>
          <div className={classes.title}>
            <div className={classes.textTitle}>
              <Text color='white' size='large'>
                Carrinho
              </Text>
              <Text color='white' size='large'>
                de compras
              </Text>
            </div>
            <Button
              type='rounded'
              color='black'
              text='X'
              textColor='white'
              textSize='medium'
              onClick={handleClose}
            />
          </div>
          <div className={classes.products}>
            <AnimatePresence>
              {cart.map((product) => (
                <CartProductCard
                  id={product.id}
                  handleAddProduct={handleAddProduct}
                  handleSubtractProduct={handleSubtractProduct}
                  onRemove={onRemoveProduct}
                  quantity={product.quantity}
                  imgUrl={product.photo}
                  key={product.id}
                  name={product.name}
                  price={product.price}
                />
              ))}
            </AnimatePresence>
          </div>
          <div className={classes.resume}>
            <Text color='white' size='large'>
              Total:
            </Text>
            <Text color='white' size='large'>
              {`R$${fomrattedValue}`}
            </Text>
          </div>
        </div>
        <Button
          type='square'
          color='black'
          textColor='white'
          textSize='large'
          text='Finalizar Compra'
        />
      </div>
    </div>
  );
};
