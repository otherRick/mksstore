import { ReactNode, createContext, useMemo } from 'react';
import {
  IProduct,
  IProductListContextDefaults,
  productListContextDefaults
} from './ProductListContextDefaults';
import { getProductList } from '../../services/apis';
import { useQuery } from '@tanstack/react-query';

interface IProductListProvider {
  children: ReactNode;
}
export const ProductListContext = createContext(productListContextDefaults);

export const ProductListProvider = ({ children }: IProductListProvider) => {
  // const fetchProducts = async () => {
  //   const res = await getProductList();
  //   return res.products;
  // };

  const { isLoading, error, data } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: () => getProductList()
  });

  const value: IProductListContextDefaults = useMemo(
    () => ({ isLoading, error, data }),
    [isLoading, error, data]
  );

  return <ProductListContext.Provider value={value}>{children}</ProductListContext.Provider>;
};
