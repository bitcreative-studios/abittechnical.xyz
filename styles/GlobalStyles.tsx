import React from 'react'
import { createGlobalStyle } from 'styled-components'
import browserReset from './browserReset'
import cssVariables from './cssVariables'

const GlobalStyles = createGlobalStyle`
 ${browserReset};
 ${cssVariables};
`

export default GlobalStyles
