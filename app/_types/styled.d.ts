// styled.d.ts
import 'styled-components';
import { theme } from '../_styles/theme/theme';

interface IPalette {
  main: string
  contrastText: string
}

interface ColorItem { 
    [n:number]:string 
}

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
