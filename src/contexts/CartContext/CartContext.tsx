import { ReactNode, createContext, useCallback, useMemo, useState } from 'react';
import { ICartContextDefaults, IProductCart, cartContextDefaults } from './CartContextDefaults';
import { IProduct } from '../ProductListContext/ProductListContextDefaults';

interface ICartProvider {
  children: ReactNode;
  cartInitialValue?: IProductCart[];
}

export const CartContext = createContext(cartContextDefaults);

export const CartProvider = ({ children, cartInitialValue = [] }: ICartProvider) => {
  /**
   * this would, ideally, be sent to an api to save on database.
   * but for the sake of this challenge, will only be saved locally.
   */
  const [cart, setCart] = useState<IProductCart[]>(cartInitialValue);

  const getCartProductIndex = useCallback(
    (productId: number) => {
      return cart.findIndex((product) => product.id === productId);
    },
    [cart]
  );

  const addCartProduct = useCallback(
    (product: IProduct) => {
      const cartCopy = [...cart];
      const foundProductIndex = getCartProductIndex(product.id);

      if (foundProductIndex !== -1) {
        cartCopy[foundProductIndex].quantity++;

        setCart(cartCopy);
        return;
      }

      setCart([...cart, { ...product, quantity: 1 }]);
    },
    [cart, getCartProductIndex]
  );

  const removeCartProduct = useCallback(
    (productId: number) => {
      const foundProductIndex = getCartProductIndex(productId);

      if (foundProductIndex === -1) return;

      const updatedCart = cart.filter((product) => product.id !== productId);

      setCart(updatedCart);
    },
    [cart, getCartProductIndex]
  );

  const updateCartProductQuantity = useCallback(
    (productId: number, operation: 'add' | 'subtract') => {
      const cartCopy = [...cart];
      const foundProductIndex = getCartProductIndex(productId);

      if (foundProductIndex === -1) return;

      if (operation === 'add') {
        cartCopy[foundProductIndex].quantity++;
      }

      if (operation === 'subtract') {
        if (cartCopy[foundProductIndex].quantity === 1) {
          removeCartProduct(productId);
          return;
        }
        cartCopy[foundProductIndex].quantity--;
      }

      setCart(cartCopy);
    },
    [cart, removeCartProduct, getCartProductIndex]
  );

  const getCartTotalPrice = useCallback(() => {
    return cart.reduce((prev, curr) => Number(prev) + Number(curr.price) * curr.quantity, 0);
  }, [cart]);

  const getCartTotalProducts = useCallback(() => {
    return cart.reduce((prev, curr) => prev + Number(curr.quantity), 0);
  }, [cart]);

  const value: ICartContextDefaults = useMemo(
    () => ({
      cart,
      addCartProduct,
      removeCartProduct,
      updateCartProductQuantity,
      getCartTotalPrice,
      getCartTotalProducts
    }),
    [
      cart,
      addCartProduct,
      removeCartProduct,
      updateCartProductQuantity,
      getCartTotalPrice,
      getCartTotalProducts
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
