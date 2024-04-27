import classes from './ProductCard.module.scss';

export const ProductCardSkeleton = () => {
  return (
    <div className={classes.productGrid}>
      <div className={classes.containerSkeleton}></div>
      <div className={classes.containerSkeleton}></div>
      <div className={classes.containerSkeleton}></div>
      <div className={classes.containerSkeleton}></div>
      <div className={classes.containerSkeleton}></div>
      <div className={classes.containerSkeleton}></div>
      <div className={classes.containerSkeleton}></div>
      <div className={classes.containerSkeleton}></div>
    </div>
  );
};
