import 'styled-components';
import { DefaultTheme } from '../theme/Default';

type ThemeType = typeof DefaultTheme;

declare module 'styled-components' {
  export type DefaultTheme = ThemeType;
}
