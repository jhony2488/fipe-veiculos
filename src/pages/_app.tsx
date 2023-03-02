import { GlobalStyle } from '../globalStyle'
import { ValueProvider } from '../contexts/Value'
import {DefaultTheme} from '../theme/Default'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const App = ({ Component, pageProps }: AppProps) => {
    return <ThemeProvider theme={DefaultTheme}><ValueProvider><Component style={GlobalStyle}{...pageProps} /></ValueProvider></ThemeProvider>
}

export default App;
