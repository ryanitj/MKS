import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: calc(100vh - 170px);
`

export const Grid = styled.div`
    display: grid;
    padding-bottom: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    place-items: center;
`

interface CartDrawerProps {
    open:boolean
}

export const CartDrawerOverlay = styled.div<CartDrawerProps>`
    background-color: rgba(0, 0, 0, .5);
    z-index: 998;
    position: absolute;
    width: ${props => props.open ? "100vw" : "0px"};
    inset: 0;
`

export const CartDrawer = styled.div<CartDrawerProps>`
    position: absolute;
    min-width: 200px;
    padding: 20px;
    right: 0;
    width: ${props => props.open ? "22.5vw" : "0px"};
    height: 100vh;
    transition: all 0.3s ease-in;
    z-index: 999;
    background-color: ${props => props.theme.colors.primary["600"]};
`

export const CartDrawerHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    align-items: center;
`

export const CartDrawerCloseButton = styled.div`
    height: 30px;
    width: 30px;
`