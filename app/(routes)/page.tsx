'use client'

import React from 'react';
import { useQuery } from "react-query"
import { baseUrl } from "../_constants/api"
import axios from "axios"
import { CartDrawer, CartDrawerHeader, CartDrawerOverlay, Container, Grid } from './styles';
import { Product } from '../_interfaces/Product';
import { CardProductList } from '../_components/pages/products/cardProductList';
import { useDrawer } from '../_hooks/useDrawer';

export default function Home() {
  const [page, setPage] = React.useState(1);
  const {
    open
  } = useDrawer();

  const { data, isLoading } = useQuery(["products"], async () => {
    const filtro = `rows=10&page=${page}&sortBy=name&orderBy=DESC`;
    return axios.get<{products:Array<Product>}>(`${baseUrl}/products?${filtro}`).then(response => response.data)
  }, {
    keepPreviousData:true
  });

  return (
    <Container>
      <Grid>
        <CardProductList 
          data={data}
          isLoading={isLoading}
        ></CardProductList>
        <CartDrawerOverlay open={open}></CartDrawerOverlay>
        <CartDrawer open={open}>
          <CartDrawerHeader>
            
          </CartDrawerHeader>
        </CartDrawer>
      </Grid>
    </Container>
  )
}
