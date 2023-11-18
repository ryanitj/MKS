


import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 14px;
    background-color: ${(props) => props.theme.colors.common.white["500"]};
    border-radius: 8px;
    max-width: 217.56px;
    width: 100%;
    margin: 18px 10px;
    max-height: 37vh;
    height: 100%;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    position: relative;
`

export const CardPhoto = styled(Image)`
    align-self: center;
    width: 100%;
    max-height: 18vh;
    height: 100%;
`

export const CardTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 8px;
    align-items: center;
`

export const CardTitle = styled.h2`
    font-weight: 400;
    width: 120px;
    font-size: 16px;
`

export const CardPriceButton = styled.div`
    background-color: ${(props) => props.theme.colors.common.black["500"]};
    padding: 5px 7px;
    color: ${(props) => props.theme.colors.common.white["600"]};
    font-weight: 700;
    border-radius: 4px;
    font-size: 14px;
`

export const CardDescription = styled.p`
    padding-top: 8px;
    font-size: 10px;
    width: 150px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

export const CardBuyButton = styled.div`
    background-color: ${(props) => props.theme.colors.primary["500"]};
    height: 28px;
    bottom: -12px;
    left: 0;
    right: 0;
    position: absolute;
    border-bottom-left-radius:8px;
    border-bottom-right-radius:8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    cursor: pointer;

    & > p {
        font-size: 14px;
        color:  ${(props) => props.theme.colors.common.white["500"]};
        font-weight: 500;
    }
`
