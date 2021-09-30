import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'

const MdxH1Heading = styled.h1`
  font-family: 'meloche', sans-serif;
  font-size: 4rem;
`
const MdxParagraph = styled.p`
  font-family: 'ruddy', sans-serif;
  font-weight: lighter;
`

const components = {
  h1: MdxH1Heading,
  p: MdxParagraph,
}

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    <MDXProvider components={components}>{element}</MDXProvider>
  </>
)
