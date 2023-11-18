import { fireEvent, render } from "@testing-library/react"
import '@testing-library/jest-dom/matchers'
import { ThemeProvider } from "styled-components"
import { theme } from "../../../../../_styles/theme/theme"
import { CartDrawer } from '..';
import { CartProvider } from "../../../../../_hooks/useCart";
import { DrawerContext, DrawerProvider } from "../../../../../_hooks/useDrawer";

describe('CartDrawer component', () => {
    it('should render Drawer component', () => {
        const {
            getByText
        } = render(
            <ThemeProvider theme={theme}>
                {/* @ts-ignore */}
                <CartProvider>
                    <CartDrawer></CartDrawer>
                </CartProvider>
            </ThemeProvider>
        )

        const drawerTitleText = "Carrinho de compras";

        expect(getByText(drawerTitleText)).toBeInTheDocument();
    });

    it('should render Drawer closed', () => {
        const {
            getByText,
            container
        } = render(
            <ThemeProvider theme={theme}>
                {/* @ts-ignore */}
                <CartProvider>
                    <CartDrawer></CartDrawer>
                </CartProvider>
            </ThemeProvider>
        )

        const closeDrawerWidth = 0;

        expect(container.clientWidth).toBeLessThanOrEqual(closeDrawerWidth);
    });

    it('should render Drawer opened', () => {
        const {
            getByAltText,
            container
        } = render(
            <ThemeProvider theme={theme}>
                {/* @ts-ignore */}
                <CartProvider>
                    {/* @ts-ignore */}
                    <DrawerProvider>
                        <DrawerContext.Consumer>
                            {() => {
                                return (
                                    <CartDrawer></CartDrawer>
                                )
                            }}
                        </DrawerContext.Consumer>
                    </DrawerProvider>
                </CartProvider>
            </ThemeProvider>
        )

        const maxDrawerWidth = 400;

        fireEvent.click(getByAltText("close drawer image"));
        expect(container.clientWidth).toBeLessThanOrEqual(maxDrawerWidth);
    });
})