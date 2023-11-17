
'use client'

import React from 'react';
import { Container } from './styles';

export const Footer = ({children}: React.PropsWithChildren) => {
    return (
        <Container>
            {children}
        </Container>
    )
}