import React, { createContext,  useContext,  useState } from 'react';
import { Product } from '../_interfaces/Product';

interface CartContextData {
    products:Array<Product>
    updateProducts:(product:Product) => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData,
);

export const CartProvider: React.FC = ({ children }: React.PropsWithChildren) => {
  const [products, setProducts] = useState<Array<Product>>([]);

  async function updateProducts(product:Product) {
    setProducts(prev => [...prev, product]);
  }
  
  return (
    <CartContext.Provider
      value={{
        products,
        updateProducts,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
    const {
        products,
        updateProducts,
    } = useContext(CartContext);
  
    return {
      products,
      actions: {
        updateProducts,
      }
    }
};