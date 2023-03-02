import { GlobalStyle } from '../globalStyle'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
    return <Component style={GlobalStyle}{...pageProps} />
}

export default App;
