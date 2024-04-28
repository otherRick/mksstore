import { Button } from '../Button/Button';
import classes from './CartProductCard.module.scss';
import { Text } from '../Text/Text';
import Svg from '../../assets/react.svg';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';

interface IHorizontalProductCard {
  imgUrl?: string;
  name?: string;
  amount?: number;
  price?: number;
  onRemove?: () => void;
}

export const CartProductCard = ({
  imgUrl = Svg,
  name = 'Apple Watch Series 4 GPS',
  amount = 0,
  price = 0,
  onRemove
}: IHorizontalProductCard) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR').format(price);
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img className={classes.image} src={imgUrl} />
        <div className={classes.name}>
          <Text size='regularFin'>{name}</Text>
        </div>
        <div className={classes.counterAmount}>
          <QuantitySelector amount={amount} />
          <Text className={classes.text} size='regular'>{`R$${formattedPrice}`}</Text>
        </div>
      </div>
      <Button
        className={classes.webButton}
        onClick={onRemove}
        type='roundedSmall'
        color='black'
        text='X'
        textColor='white'
        textSize='small'
      />
      <button className={classes.mobileButton}>
        <Text size='large'>X</Text>
      </button>
    </div>
  );
};
