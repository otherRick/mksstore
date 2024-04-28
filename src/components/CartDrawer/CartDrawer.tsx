import { Button } from '../Button/Button';
import { CartProductCard } from '../CartProductCard/CartProductCard';
import { Text } from '../Text/Text';
import classes from './CartDrawer.module.scss';

interface ICartDrawer {
  value: number;
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ value = 2321.0, isOpen, onClose }: ICartDrawer) => {
  const fomrattedValue = new Intl.NumberFormat('pt-BR').format(value);

  const handleClose = () => {
    onClose();
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
            <CartProductCard />
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
