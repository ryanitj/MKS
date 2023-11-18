'use client'

import React from 'react';
import {
    CartDrawer as CartDrawerComponent,
    CartDrawerCloseButton,
    CartDrawerOverlay,
    CartDrawerSubmitButton,
    CartDrawerHeader,
    CartDrawerTotalPriceContainer,
    CartDrawerBuyContainer
} from "./styles"

import { useDrawer } from '../../../../_hooks/useDrawer';
import { useCart } from '../../../../_hooks/useCart';
import { CartItemList } from '../cartItemList';
import { toast } from 'react-toastify';
import { Transition } from 'framer-motion';
import CloseSvg from '../../../../../public/icons/close.svg';
import Image from 'next/image';

export const CartDrawer = () => {
    const windowLessThan768 = window.innerWidth <= 768;

    const {
        open,
        actions: drawerActions,
    } = useDrawer();

    const {
        actions: cartActions,
        groupedProducts,
        totalPrice
    } = useCart();

    const toggleDrawer = () => {
        drawerActions.toggleDrawer();
    }

    const handleSubmit = () => {
        (
            cartActions.reset(),
            drawerActions.toggleDrawer(),
            toast("Compra realizada com sucesso!"),
            () => { }
        )
    }

    const transitionConfig: Transition | undefined = {
        type: "spring",
        stiffness: 120,
        damping: 20,
    }

    const initialState = {
        width: 0,
        opacity: 0
    }

    const animateState = {
        width: open ? windowLessThan768 ? "100%" : 400 : 0,
        opacity: open ? 1 : 0
    }

    return (
        <>
            <CartDrawerOverlay
                onClick={toggleDrawer}
                open={open}
            />

            <CartDrawerComponent
                transition={transitionConfig}
                initial={initialState}
                animate={animateState}>
                <CartDrawerHeader>
                    <h2>
                        Carrinho <br /> de compras
                    </h2>
                    <CartDrawerCloseButton
                        onClick={toggleDrawer}
                    >
                        <Image
                            alt='close drawer image'
                            width={12}
                            height={12}
                            src={CloseSvg}
                        />
                    </CartDrawerCloseButton>
                </CartDrawerHeader>

                <CartDrawerBuyContainer>
                    <CartItemList groupedProducts={groupedProducts} />
                </CartDrawerBuyContainer>

                <CartDrawerTotalPriceContainer>
                    <h2>Total:</h2>
                    <h2>R${totalPrice.toString()}</h2>
                </CartDrawerTotalPriceContainer>

                <CartDrawerSubmitButton
                    onClick={handleSubmit}
                >
                    <p>Finalizar Comprar</p>
                </CartDrawerSubmitButton>
            </CartDrawerComponent>
        </>

    )
}