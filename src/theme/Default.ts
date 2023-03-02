import { createTheme } from '@mui/material';

export const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: '#E54D2E',
      dark: '#FB887A',
      contrastText: '#393939',
    },
    secondary: {
      main: '#F93822 ',
      dark: '#FB887A',
      contrastText: '#393939',
    },
    info: {
      main: '#3585E9',
    },
    background: {
      default: '#F9F8F9',
      paper: '#FFF',
    },
    grey: {
      '100': '#F0F0F2',
      '200': '#E1E2E6',
      '300': '#C2C4CD',
      '400': '#A4A7B4',
      '500': '#6E7381',
      '600': '#5C6170',
      '700': '#373942',
      '800': '#181925',
      '900': '#09090D',
      A400: '#D9D9D9',
    },
  },
  typography: {
    fontFamily: 'Manrope',
    }
});
