import React from 'react'
import { ThemeProvider } from 'styled-components'
import type { AppProps /*, AppContext */ } from 'next/app'

import { GlobalStyles, theme } from '../styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
