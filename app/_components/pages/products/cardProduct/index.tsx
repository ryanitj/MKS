import React from 'react';
import { 
    CardBuyButton, 
    CardDescription, 
    CardPhoto, 
    CardPriceButton, 
    CardTitle, 
    CardTitleContainer, 
    Container } from './styles';

import ShoppingBagSvg from '../../../../../public/icons/shopping-bag.svg';
import Image from 'next/image';
import { useCart } from '@/app/_hooks/useCartcomponents';
import { Product } from '@/app/_interfaces/Productcomponents';

interface CardProductProps extends Omit<Product, 'createdAt' | 'updatedAt'> {
    isLoading:boolean
};

export const CardProduct = ({
    description,
    photo,
    price,
    name,
    brand,
    id,
    isLoading,
}:CardProductProps) => {
    const {
        actions
    } = useCart();

    const handleUpdateProducts = () => {
        const data = {
            description,
            photo,
            price,
            name,
            brand,
            id,
        }

        actions.updateProducts(data)
    }
    
    if(isLoading){
        return <p>teste</p>    
    }

    return (
        <Container>
            {/* @ts-ignore */}
            <CardPhoto 
                alt='imagem' 
                src={photo} 
                width={150} 
                height={150}
            />
            <CardTitleContainer>
                <CardTitle>{name}</CardTitle>
                <div style={{width:20}}></div>
                <CardPriceButton>
                    R${price}
                </CardPriceButton>
            </CardTitleContainer>
            <CardDescription>
                {description}
            </CardDescription>
            <CardBuyButton
                onClick={() => handleUpdateProducts()}
            >
                {/* @ts-ignore */}
                <Image alt='buy product button' src={ShoppingBagSvg} width={16} height={16}></Image>
                <p>COMPRAR</p>
            </CardBuyButton>
            {/* <CardButton></CardButton> */}
        </Container>
    )
}