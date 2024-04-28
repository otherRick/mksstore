import { Button } from '../Button/Button';
import { motion } from 'framer-motion';

import classes from './CartProductCard.module.scss';
import { Text } from '../Text/Text';
import Svg from '../../assets/react.svg';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';

interface IHorizontalProductCard {
  id: number;
  imgUrl?: string;
  handleAddProduct: (productId: number) => void;
  handleSubtractProduct: (productId: number) => void;
  onRemove: (productId: number) => void;
  name?: string;
  quantity: number;
  price?: number;
}

export const CartProductCard = ({
  id,
  handleAddProduct,
  handleSubtractProduct,
  onRemove,
  imgUrl = Svg,
  name = 'Apple Watch Series 4 GPS',
  quantity,
  price = 0
}: IHorizontalProductCard) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR').format(price);

  return (
    <motion.div exit={{ scaleY: 0 }} initial={{ scaleY: 1 }} transition={{ duration: 0.3 }}>
      <div className={classes.container}>
        <div className={classes.content}>
          <img className={classes.image} src={imgUrl} />
          <div className={classes.name}>
            <Text size='regularFin'>{name}</Text>
          </div>
          <div className={classes.counterAmount}>
            <QuantitySelector
              handleAddProduct={() => handleAddProduct(id)}
              handleSubtractProduct={() => handleSubtractProduct(id)}
              quantity={quantity}
            />
            <Text className={classes.text} size='regular'>{`R$${formattedPrice}`}</Text>
          </div>
        </div>
        <Button
          className={classes.webButton}
          onClick={() => onRemove(id)}
          type='roundedSmall'
          color='black'
          text='X'
          textColor='white'
          textSize='small'
        />

        <button onClick={() => onRemove(id)} className={classes.mobileButton}>
          <Text size='large'>X</Text>
        </button>
      </div>
    </motion.div>
  );
};
