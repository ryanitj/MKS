import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: calc(100vh - 170px);

    @media (max-width: 768px) {
        max-height:none;
    }
`

export const Grid = styled.div`
    display: grid;
    padding-bottom: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    place-items: center;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 560px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
