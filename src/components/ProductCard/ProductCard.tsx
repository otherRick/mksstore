import { IProduct } from '../../contexts/ProductListContext/ProductListContextDefaults';

export const ProductCard = ({ id, photo, name, brand, description, price }: IProduct) => {
  return (
    <div key={id}>
      <img src={photo} alt={name} />
      <p>{name}</p>
      <p>{brand}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};
