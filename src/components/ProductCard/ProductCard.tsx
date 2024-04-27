import { IProduct } from '../../contexts/ProductListContext/ProductListContextDefaults';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import classes from './ProductCard.module.scss';
import shoppingIcon from '../../assets/shoppingIcon.svg';

export const ProductCard = ({ id, photo, name, description, price }: IProduct) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
    .format(Number(price))
    .slice(3);

  console.log();

  return (
    <div className={classes.container} key={id}>
      <div className={classes.item}>
        <img src={photo} alt={name} />

        <div className={classes.title}>
          <Text className={classes.name} size='medium'>
            {name}
          </Text>
          <Text className={classes.price}>{`R$${formattedPrice}`}</Text>
        </div>
        <Text className={classes.descBox}>{description}</Text>
      </div>
      <Button icon={shoppingIcon} text='COMPRAR' />
    </div>
  );
};
