
import React from 'react';
import { Product } from '../../../../_interfaces/Product';
import { CartItem } from '../cartItem';
import { GroupBy } from '../../../../_interfaces/GroupBy';

interface CartItemListProps {
  groupedProducts: GroupBy<Product | undefined>
}

export const CartItemList = ({
  groupedProducts,
}: CartItemListProps) => {

  if (!groupedProducts) {
    return <></>
  }

  return Object.values(groupedProducts)!.map(productList => {
    return (
      <CartItem
        description={productList[0]!.description}
        photo={productList[0]!.photo}
        name={productList[0]!.name}
        brand={productList[0]!.brand}
        id={productList[0]!.id}
        key={Math.random()}
        price={productList[0]!.price}
        total={productList.length.toString()}
      />
    )
  });
}