


import Image from "next/image";
import styled from "styled-components";
import CloseSvg from '../../../../../public/icons/close.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 12px 14px;
    justify-content:space-between;
    align-items:center;
    background-color: ${(props) => props.theme.colors.common.white["500"]};
    border-radius: 6px;
    width: 100%;
    margin-bottom: 24px;
    height: 80px;
    position:relative;
`

export const ProductPhoto = styled(Image)`
    width:auto;
    height:50px;
`

interface ProductDescriptionProps {
    textbold?:boolean;
}

export const ProductDescription = styled.h2<ProductDescriptionProps>`
    color: ${(props) => props.theme.colors.common.black["500"]};
    font-size:12px;
    font-weight:${props => props.textbold ? "700" : "400"};
    width:30%;
`


export const CloseButtonContainer = styled.div`
    position:absolute;
    right:-8px;
    top:-8px;
    height:15px;
    cursor:pointer;
    display:flex;
    padding:5px;
    justify-content:center;
    align-items:center;
    width:15px;
    border-radius:10px;
    background-color:${props => props.theme.colors.common.black['900']};
`

export const CloseButtonIcon= styled(Image).attrs({src:CloseSvg})`
    height:8px;
    width:8px;
`




