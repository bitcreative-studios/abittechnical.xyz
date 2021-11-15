import { ThemeProvider } from 'styled-components'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
