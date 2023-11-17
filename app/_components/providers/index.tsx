'use client'

import { theme } from "@/app/_styles/theme/themecomponents"
import { ThemeProvider } from "styled-components"
import { QueryClient, QueryClientProvider } from 'react-query'
import { CartProvider } from "@/app/_hooks/useCartcomponents"
import { DrawerProvider } from "@/app/_hooks/useDrawercomponents"


export const Providers = ({
    children
}: React.PropsWithChildren) => {
    const queryClient = new QueryClient({});

    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                {/* @ts-ignore */}
                <CartProvider>
                    {/* @ts-ignore */}
                    <DrawerProvider>
                        {children}
                    </DrawerProvider>
                </CartProvider>
            </QueryClientProvider>
        </ThemeProvider>
    )
}