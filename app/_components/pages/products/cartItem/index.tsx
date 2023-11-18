import React from 'react';
import {
    CloseButtonContainer,
    CloseButtonIcon,
    Container, ProductDescription, ProductPhoto
} from './styles';

import { useCart } from '../../../../_hooks/useCart';
import { Product } from '../../../../_interfaces/Product';
import { Operation, Stepper } from '../../../../_components/shared/stepper';

interface CartItemProps extends Omit<Product, 'createdAt' | 'updatedAt'> {
    total: string
};

export const CartItem = ({
    description,
    photo,
    price,
    name,
    brand,
    id,
    total
}: CartItemProps) => {
    const {
        actions
    } = useCart();

    const calculatedPrice = (parseFloat(price) * Number(total)).toString();

    const handleUpdateProducts = (operation: Operation) => {
        const data = {
            description,
            photo,
            price,
            name,
            brand,
            id,
        }

        if (operation == 'positive') {
            actions.updateProducts(data)
            return;
        }

        actions.removeProduct(data)
    }

    const handleRemoveProductList = () => {
        const data = {
            description,
            photo,
            price,
            name,
            brand,
            id,
        }

        actions.removeProductListByName(data);
    }

    return (
        <Container>
            {/* @ts-ignore */}
            <ProductPhoto
                width={100}
                height={100}
                src={photo}
                alt='product photo'
            />
            <ProductDescription>{name}</ProductDescription>
            <Stepper
                value={total}
                onChange={(operation: Operation) => {
                    handleUpdateProducts(operation)
                }}
            ></Stepper>
            <ProductDescription textbold={true}>R${calculatedPrice}</ProductDescription>
            <CloseButtonContainer
                onClick={handleRemoveProductList}
            >
                {/* @ts-ignore */}
                <CloseButtonIcon alt='close button icon' />
            </CloseButtonContainer>
        </Container>
    )
}