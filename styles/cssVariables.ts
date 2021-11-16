import { css } from 'styled-components'

const cssVariables = css`
  & {
    --font-size-h1: ${({ theme }) => theme.fontSize.default.h1};
    --font-size-h2: ${({ theme }) => theme.fontSize.default.h2};
    --font-size-h3: ${({ theme }) => theme.fontSize.default.h3};
    --font-size-h4: ${({ theme }) => theme.fontSize.default.h4};
    --font-size-text: ${({ theme }) => theme.fontSize.default.text};
  }
  @media all and (min-width: 1300px) {
    & {
      --font-size-h1: ${({ theme }) => theme.fontSize.desktop.h1};
      --font-size-h2: ${({ theme }) => theme.fontSize.desktop.h2};
      --font-size-h3: ${({ theme }) => theme.fontSize.desktop.h3};
      --font-size-h4: ${({ theme }) => theme.fontSize.desktop.h4};
      --font-size-text: ${({ theme }) => theme.fontSize.desktop.text};
    }
  }
`
export default cssVariables
