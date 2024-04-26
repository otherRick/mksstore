export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface IProductListContextDefaults {
  isLoading: boolean;
  error: Error | null;
  data?: IProduct[];
}

export const productListContextDefaults: IProductListContextDefaults = {
  isLoading: false,
  error: null,
  data: []
};
