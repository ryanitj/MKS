import Image from "next/image";
import styled from "styled-components";
import CartIconSvg from '../../../../../public/icons/cart.svg';

export const Container = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.primary["500"]};
    align-items: center;
    justify-content: space-between;
    padding: 20px 80px;
`

export const CardButtonContainer = styled.div`
    padding: 10px;
    height: 5.75vh;
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    background-color: ${props => props.theme.colors.common.white["500"]};

    &:hover {
        background-color: ${props => props.theme.colors.common.white["600"]};
    }
`

export const CartIcon = styled(Image).attrs({src:CartIconSvg})`
    width: 3.10vh;
    height: 3.10vh;
`

export const CartNumber = styled.p`
    color: ${props => props.theme.colors.common.black["500"]};
    font-weight: bold;
    font-size: 3vh;
`