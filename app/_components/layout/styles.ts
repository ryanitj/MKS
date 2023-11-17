import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1fr, 14);
    grid-template-rows: 10vh 1fr 50px;
    width: 100%;
    min-height:100vh;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.common.white["600"]};
`