import { themes } from '@storybook/theming'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DefaultTheme } from "../src/theme/Default";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark
  },
}

export const withMuiTheme = (Story) => (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
);

export const decorators = [withMuiTheme]
