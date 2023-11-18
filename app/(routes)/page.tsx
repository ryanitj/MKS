'use client'

import React from 'react';
import { useQuery } from "react-query"
import { baseUrl } from "../_constants/api"
import axios from "axios"
import { Container, Grid } from './styles';
import { Product } from '../_interfaces/Product';
import { CardProductList } from '../_components/pages/products/cardProductList';
import CloseSvg from '../../public/icons/close.svg';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { CartDrawer } from '../_components/pages/products/drawer';

export default function Home() {
  const [page, setPage] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(false);

  const { data, isLoading } = useQuery(["products"], async () => {
    const filtro = `rows=10&page=${page}&sortBy=name&orderBy=DESC`;
    return axios.get<{ products: Array<Product> }>(`${baseUrl}/products?${filtro}`).then(response => response.data)
  }, {
    keepPreviousData: true
  });

  return (
    <Container>
      <Grid>

        <CardProductList
          data={data}
          isLoading={isLoading}
        />
        <CartDrawer></CartDrawer>
      </Grid>
    </Container >
  )
}
