import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductCardSkeleton } from '../../components/ProductCard/ProductCardSkeleton';
import { useProductListContext } from '../../contexts/ProductListContext/useProductListContext';
import classes from './Dashboard.module.scss';

export const Dashboard = () => {
  const { data, error, isLoading } = useProductListContext();

  if (isLoading) return <ProductCardSkeleton />;
  if (error) return <div>Error fetching products: {error.message}</div>;
  if (!data || data.length === 0) return <div>error fetching data</div>;

  return (
    <div className={classes.container}>
      <div className={classes.productGrid}>
        {data.map(({ description, id, name, photo, price }) => {
          return (
            <ProductCard
              id={id}
              name={name}
              photo={photo}
              price={price}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
};
