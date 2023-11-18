import styled from "styled-components"
import { motion } from 'framer-motion';

interface CartDrawerProps {
    open:boolean
}

export const CartDrawerOverlay = styled.div<CartDrawerProps>`
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;
    position: absolute;
    display:${props => props.open ? "block" : "none"};
    transition:all 0.2s ease-in;
    opacity: ${props => props.open ? "1" : "0"};
    inset: 0;
`

export const CartDrawer = styled(motion.div)<CartDrawerProps>`
    display:flex;
    flex-direction:column;
    position: absolute;
    padding: 24px;
    padding-inline:32PX;
    top:0;
    bottom:0;
    right: 0;
    z-index: 999;
    background-color: ${props => props.theme.colors.primary["600"]};
`

export const CartDrawerHeader = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    position:relative;

    & > h2 {
        color:white;
        font-size:23px;
    }
`

export const CartDrawerCloseButton = styled.div`
    height: 30px;
    width: 30px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:16px;
    cursor:pointer;
    background-color: ${props => props.theme.colors.common.black["900"]};
    border-radius:20px;

    &:hover {
        background-color: ${props => props.theme.colors.common.black["500"]};
    }
`

export const CartDrawerSubmitButton = styled.button`
    height: 72px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:20px;
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    cursor:pointer;
    border:0;
    background-color: ${props => props.theme.colors.common.black["900"]};
    color:${props => props.theme.colors.common.white["500"]};
    font-weight:700;
    font-size:20px;

    &:hover {
        background-color: ${props => props.theme.colors.common.black["500"]};
    }
`

export const CartDrawerBuyContainer = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    width:100%;
    flex:1;
    padding-top:38px;
    overflow-y:auto;
    overflow-x:hidden;
    padding-right:20px;
`

export const CartDrawerTotalPriceContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:${props => props.theme.colors.common.white["500"]};
    align-self:flex-end;
    padding-bottom:80px;
    width:100%;
    align-items:flex-end;
`

