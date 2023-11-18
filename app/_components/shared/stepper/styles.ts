


import styled, { css } from "styled-components";

export const Container = styled.div`
    width:46px;
    border:1px solid ${props => props.theme.colors.common.black["200"]};
    height:20px;
    border-radius:4px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    padding:4px;
`

interface StepBlockProps {
    border?:'left' | 'right'
}

export const StepBlock = styled.div<StepBlockProps>`
    height:10px;
    width:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:10px;

    ${(props) => props.border == "left" && css`
        border-left:1px solid ${props => props.theme.colors.common.black["200"]};
        cursor:pointer;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    `}
    ${(props) => props.border == "right" && css`
        border-right:1px solid ${props => props.theme.colors.common.black["200"]};
        cursor:pointer;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    `}
    
`