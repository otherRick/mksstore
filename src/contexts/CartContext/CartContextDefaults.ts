import { IProduct } from '../ProductListContext/ProductListContextDefaults';

export interface IProductCart extends IProduct {
  quantity: number;
}

export interface ICartContextDefaults {
  cart: IProductCart[];
  addCartProduct: (product: IProduct) => void;
  removeCartProduct: (productId: number) => void;
  updateCartProductQuantity: (productId: number, operation: 'add' | 'subtract') => void;
  getCartTotalPrice: () => number;
  getCartTotalProducts: () => number;
}

export const cartContextDefaults: ICartContextDefaults = {
  cart: [],
  addCartProduct: () => {},
  removeCartProduct: () => {},
  updateCartProductQuantity: () => {},
  getCartTotalPrice: () => 0,
  getCartTotalProducts: () => 0
};
