import { Text } from '../Text/Text';
import classes from './Button.module.scss';

interface IButton {
  text?: string;
  type?: 'pool' | 'square' | 'rounded' | 'roundedSmall';
  color?: 'blue' | 'black';
  textSize?: 'regular' | 'medium' | 'small';
  icon?: string;
}

export const Button = ({
  text,
  type = 'pool',
  color = 'blue',
  textSize = 'regular',
  icon
}: IButton) => {
  const combinedClassName = `${classes.button} ${classes[type]} ${classes[color]}`.trim();

  return (
    <button className={combinedClassName}>
      {icon ? <img className={classes.img} src={icon} /> : null}
      {text ? (
        <Text className={classes.text} size={textSize}>
          {text}
        </Text>
      ) : null}
    </button>
  );
};
