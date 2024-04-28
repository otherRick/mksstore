import { Text } from '../Text/Text';
import classes from './QuantitySelector.module.scss';
interface IQuantitySelect {
  amount: number;
}

export const QuantitySelector = ({ amount = 0 }: IQuantitySelect) => {
  return (
    <div className={classes.container}>
      <Text className={classes.qtd}>Qtd:</Text>
      <div className={classes.counter}>
        <button className={classes.buttonMinus}>
          <Text className={classes.text}>-</Text>
        </button>
        <div className={classes.amount}>
          <Text className={classes.text}>{String(amount)}</Text>
        </div>
        <button className={classes.buttonPlus}>
          <Text className={classes.text}>+</Text>
        </button>
      </div>
    </div>
  );
};
