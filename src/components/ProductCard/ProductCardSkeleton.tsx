import classes from './ProductCard.module.scss';

export const ProductCardSkeleton = () => {
  return (
    <div className={classes.productGrid}>
      <div data-testid='product-card-skeleton' className={classes.containerSkeleton}></div>
      <div data-testid='product-card-skeleton' className={classes.containerSkeleton}></div>
      <div data-testid='product-card-skeleton' className={classes.containerSkeleton}></div>
      <div data-testid='product-card-skeleton' className={classes.containerSkeleton}></div>
      <div data-testid='product-card-skeleton' className={classes.containerSkeleton}></div>
      <div data-testid='product-card-skeleton' className={classes.containerSkeleton}></div>
      <div data-testid='product-card-skeleton' className={classes.containerSkeleton}></div>
      <div data-testid='product-card-skeleton' className={classes.containerSkeleton}></div>
    </div>
  );
};
