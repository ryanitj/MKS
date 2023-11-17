
import React from 'react';
import { Container } from './styles';

export const Button = ({children}: React.PropsWithChildren) => {
    return (
        <Container>
            {children}
        </Container>
    )
}