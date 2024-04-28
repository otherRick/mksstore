import classes from './Text.module.scss';

interface IText {
  children: string;
  size?: 'small' | 'medium' | 'regular' | 'great' | 'large' | 'regularFin';
  className?: string;
  color?: 'white' | 'gray' | 'black';
}

export const Text = ({ children, size = 'small', className, color = 'gray' }: IText) => {
  const combinedClassName = `${classes[size]} ${className} ${classes[color]}`.trim();

  return <p className={combinedClassName}>{children}</p>;
};
