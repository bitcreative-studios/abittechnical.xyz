import React from "react"
import {GlobalStyles} from "twin.macro"
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const wrapRootElement = ({element}) => (
  <>
    <GlobalStyles/>
    {element}
  </>
)
