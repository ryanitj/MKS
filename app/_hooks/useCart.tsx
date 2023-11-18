import React, { createContext, useContext, useState } from 'react';
import { Product } from '../_interfaces/Product';
import { GroupBy } from '../_interfaces/GroupBy';
import { ArrayUtil } from '../_utils/arrayUtil';

interface CartContextData {
  products: Array<Product>
  groupedProducts: GroupBy<Product>
  totalPrice: Number
  updateProducts: (product: Product) => void;
  removeProduct: (product: Product) => void;
  removeProductListByName: (product: Product) => void;
  reset: () => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData,
);

export const CartProvider: React.FC = ({ children }: React.PropsWithChildren) => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [groupedProducts, setGroupedProducts] = useState<GroupBy<Product>>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const groupByNameProductList = (productList: Array<Product>) => {
    return ArrayUtil.groupBy<Product>(productList, 'name');
  }

  async function updateProducts(product: Product) {
    setProducts(prev => [...prev, product]);
  }

  async function removeProduct(product: Product) {
    const newProductList = ArrayUtil.removeItemByKey<Product>(products, product, 'name');
    setProducts([...newProductList]);
  }

  async function removeProductListByName(product: Product) {
    setProducts(prev => {
      return prev.filter(item => item.name != product.name)
    });
  }

  async function reset() {
    setProducts([]);
  }

  React.useEffect(() => {
    if (products.length >= 0) {
      setGroupedProducts(groupByNameProductList(products));
    }
  }, [products])

  React.useEffect(() => {
    const sumProductListPrice = () => {
      const totalPriceSum = products.reduce((acc: any, item: Product) => {
        return acc + parseFloat(item.price);
      }, 0);

      setTotalPrice(totalPriceSum)
    }

    if (groupedProducts) {
      sumProductListPrice();
    }
  }, [groupedProducts, products])

  return (
    <CartContext.Provider
      value={{
        products,
        updateProducts,
        removeProduct,
        removeProductListByName,
        groupedProducts,
        totalPrice,
        reset
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const {
    products,
    updateProducts,
    removeProduct,
    removeProductListByName,
    reset,
    totalPrice,
    groupedProducts,
  } = useContext(CartContext);

  return {
    products,
    groupedProducts,
    totalPrice,
    actions: {
      updateProducts,
      removeProduct,
      removeProductListByName,
      reset
    }
  }
};