import { useContext } from 'react';
import { ProductListContext } from './ProductListContext';

export const useProductListContext = () => {
  return useContext(ProductListContext);
};
