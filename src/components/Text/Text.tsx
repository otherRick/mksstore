import classes from './Text.module.scss';

interface IText {
  children: string;
  size?: 'small' | 'medium' | 'regular';
  className?: string;
}

export const Text = ({ children, size = 'small', className }: IText) => {
  const combinedClassName = `${classes[size]} ${className}`.trim();

  return <p className={combinedClassName}>{children}</p>;
};
