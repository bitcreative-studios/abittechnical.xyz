import React from 'react'
import { createGlobalStyle } from 'styled-components'
import browserReset from './browserReset'

const GlobalStyles = createGlobalStyle`
 ${browserReset}
 html {
   --font-size-h1: 3.5rem;
   --font-size-h2: 2.5rem;
   --font-size-h3: 1.5rem;
   --font-size-h4: 1.25rem;
   --font-size-text: 1.125rem;
   --color-primary: #000;
   --color-primary-alt: #ddd;
   --color-secondary: #fff;
   --font-family-primary: "Sora", sans-serif;
   --font-family-secondary: "Inter", "Sora", sans-serif;
 }
`

export default GlobalStyles
