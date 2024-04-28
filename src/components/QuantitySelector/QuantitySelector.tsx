import { Text } from '../Text/Text';
import classes from './QuantitySelector.module.scss';
interface IQuantitySelect {
  quantity: number;
  handleAddProduct: () => void;
  handleSubtractProduct: () => void;
}

export const QuantitySelector = ({
  handleAddProduct,
  handleSubtractProduct,
  quantity = 0
}: IQuantitySelect) => {
  return (
    <div className={classes.container}>
      <Text className={classes.qtd}>Qtd:</Text>
      <div className={classes.counter}>
        <button onClick={handleSubtractProduct} className={classes.buttonMinus}>
          <Text className={classes.text}>-</Text>
        </button>
        <div className={classes.quantity}>
          <Text className={classes.text}>{String(quantity)}</Text>
        </div>
        <button onClick={handleAddProduct} className={classes.buttonPlus}>
          <Text className={classes.text}>+</Text>
        </button>
      </div>
    </div>
  );
};
