/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import * as React from 'react'
// You can delete this file if you're not using it
import "./src/styles/prism-atom-dark.css"
// require("prismjs/themes/prism-solarizedlight.css")
// require("prismjs/plugins/line-numbers/prism-line-numbers.css")

import { PreviewStoreProvider } from 'gatsby-source-prismic'

export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
)
