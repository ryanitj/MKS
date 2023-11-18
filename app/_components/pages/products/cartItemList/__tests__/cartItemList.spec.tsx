import { render } from "@testing-library/react"
import '@testing-library/jest-dom/matchers'
import { CartItemList } from ".."
import { cartItemListMock } from "./MOCK"
import { ThemeProvider } from "styled-components"
import { theme } from "../../../../../_styles/theme/theme"

describe('CartItemList component', () => {
    it('should render CartItemList component', () => {
        const {
            getByText
        } = render(
            <ThemeProvider theme={theme}>
                <CartItemList
                    groupedProducts={cartItemListMock}
                />
            </ThemeProvider>
        )

        const values = Object.values(cartItemListMock);

        expect(getByText(values[0][0].name)).toBeInTheDocument();


    });

    it('should fail to render CartItemList component', () => {
        const {
            queryByText
        } = render(
            <ThemeProvider theme={theme}>
                <CartItemList
                    groupedProducts={cartItemListMock}
                />
            </ThemeProvider>
        )
        const anyText = "test";

        expect(queryByText(anyText)).not.toBeInTheDocument();
    });
})