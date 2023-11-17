
'use client'

import React from 'react';
import { Container } from './styles';

export const NavBar = ({children}: React.PropsWithChildren) => {
    return (
        <Container>
            {children}
        </Container>
    )
}