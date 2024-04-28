import { Text } from '../Text/Text';
import classes from './Button.module.scss';

interface IButton {
  text?: string;
  type?: 'pool' | 'square' | 'rounded' | 'roundedSmall' | 'squareSmall' | 'rectangle';
  color?: 'blue' | 'black' | 'white';
  textColor?: 'black' | 'white' | 'gray';
  textSize?: 'regular' | 'medium' | 'small' | 'great' | 'large';
  icon?: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  text,
  type = 'pool',
  color = 'blue',
  textSize = 'regular',
  textColor = 'white',
  className,
  icon,
  onClick
}: IButton) => {
  const combinedClassName =
    `${classes.button} ${classes[type]} ${classes[color]} ${className}`.trim();

  return (
    <button onClick={onClick} className={combinedClassName}>
      {icon ? <img className={classes.img} src={icon} /> : null}
      {text ? (
        <Text color={textColor} className={classes.text} size={textSize}>
          {text}
        </Text>
      ) : null}
    </button>
  );
};
