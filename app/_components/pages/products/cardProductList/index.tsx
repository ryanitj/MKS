
import React from 'react';
import { Product } from '@/app/_interfaces/Productcomponents';
import { CardProduct } from '../cardProduct';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

interface CardProductListProps {
  data: { products: Array<Product> } | undefined
  isLoading: boolean
}

const SKELETON_ITEMS = Array.from({ length: 8 }).fill(0);

export const CardProductList = ({
  data,
  isLoading
}: CardProductListProps) => {
  if (isLoading) {
    return SKELETON_ITEMS.map((item, index) => (
      <SkeletonTheme key={index} >
        <Skeleton
          style={{
            height: 200,
            width: 200,
            margin: 8
          }}
          count={1}
        />
      </SkeletonTheme>
    ))
  }


  return data!.products.map(item => (
    <CardProduct
      isLoading={isLoading}
      description={item.description}
      photo={item.photo}
      name={item.name}
      brand={item.brand}
      key={item.id}
      id={item.id}
      price={item.price}
    />
  ));
}