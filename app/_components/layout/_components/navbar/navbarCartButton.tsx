import React from 'react'
import { CardButtonContainer } from './styles'


export const NavbarCartButton = ({children}:React.PropsWithChildren) => {
    return (
        <CardButtonContainer>
            {children}
        </CardButtonContainer>
    )
}