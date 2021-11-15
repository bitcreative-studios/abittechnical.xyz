import React from 'react'
import browserReset from '../styles/browserReset'
import styled, {
  createGlobalStyle,
  css,
  ThemeProvider,
} from 'styled-components'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const Background = styled.div`
  height: 100vh;
  background-image: repeating-radial-gradient(
    center center,
    var(--color-primary),
    var(--color-primary) 1px,
    var(--color-secondary) 1px,
    var(--color-secondary) 100%
  );
  background-size: 8px 8px;
`
const GlobalStyles = createGlobalStyle`
 ${browserReset}
 & {
   background-image: -webkit-repeating-radial-gradient( center center, var(--color-primary), var(--color-primary) 1px, var(--color-secondary) 1px, var(--color-secondary) 100% );
   background-size: 8px 8px;
 }
`

export const decorators = [
  Story => (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Background>
        <Story />
      </Background>
    </ThemeProvider>
  ),
]
