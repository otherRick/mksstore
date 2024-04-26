import { useProductListContext } from '../../contexts/ProductListContext/useProductListContext';
import classes from './Dashboard.module.scss';

export const Dashboard = () => {
  const { data, error, isLoading } = useProductListContext();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error fetching products: {error.message}</div>;
  if (!data || data.length === 0) return <div>error fetching data</div>;

  return (
    <div className={classes.container}>
      {data.map(({ brand, description, id, name, photo, price }) => {
        return (
          <div key={id}>
            <img src={photo} alt={name} />
            <p>{name}</p>
            <p>{brand}</p>
            <p>{description}</p>
            <p>{price}</p>
          </div>
        );
      })}
    </div>
  );
};
