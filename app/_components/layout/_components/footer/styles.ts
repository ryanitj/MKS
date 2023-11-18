import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 40px;
    background-color: ${props => props.theme.colors.common.gray["500"]};
    font-size:12px;
`