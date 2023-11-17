
'use client'

import React from 'react';
import { Container, Content } from './styles';
import { NavBar } from './_components/navbar';
import { Footer } from './_components/footer';
import { CardButtonContainer, CartIcon, CartNumber } from './_components/navbar/styles';
import { useCart } from '@/app/_hooks/useCartcomponents';
import { useDrawer } from '@/app/_hooks/useDrawercomponents';

export const Layout = ({children}: React.PropsWithChildren) => {
    const {
        products
    } = useCart();

    const {
        actions,
    } = useDrawer();

    return (
        <Container>
            <NavBar>
                <div></div>
                <CardButtonContainer
                    onClick={() => {
                        actions.toggleDrawer();
                    }}
                >
                    {/* @ts-ignore */}
                    <CartIcon />
                    <CartNumber>{products.length.toString()}</CartNumber>
                </CardButtonContainer>
            </NavBar>
            <Content>
                {children}
            </Content>
            <Footer>
                {/* <p>MKS sistemas © Todos os direitos reservados</p> */}
            </Footer>
        </Container>
    )
}