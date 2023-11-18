import { render } from "@testing-library/react"
import '@testing-library/jest-dom/matchers'
import { CartItem } from ".."
import { cartItemMock } from "./MOCK"
import { ThemeProvider } from "styled-components"
import { theme } from "../../../../../_styles/theme/theme"

describe('CartItemList component', () => {
    it('should render CartItem component', () => {
        const {
            getByText
        } = render(
            <ThemeProvider theme={theme}>
                <CartItem
                    brand={cartItemMock.brand}
                    description={cartItemMock.description}
                    id={Number(cartItemMock.id)}
                    name={cartItemMock.name}
                    photo={cartItemMock.photo}
                    price={cartItemMock.price}
                    total={"1"}
                />
            </ThemeProvider>
        )

        expect(getByText(cartItemMock.name)).toBeInTheDocument();
    });

    it('should fail to render CartItem component', () => {
        const {
            queryByText
        } = render(
            <ThemeProvider theme={theme}>
                <CartItem
                    brand={cartItemMock.brand}
                    description={cartItemMock.description}
                    id={Number(cartItemMock.id)}
                    name={""}
                    photo={cartItemMock.photo}
                    price={cartItemMock.price}
                    total={"1"}
                />
            </ThemeProvider>
        )

        expect(queryByText(cartItemMock.name)).not.toBeInTheDocument();
    });
})