import React, { useEffect } from "react"
// import Markdown from "react-markdown"
// import { RichText } from "prismic-reactjs"
import Prism from "prismjs"

import "prismjs/components/prism-jsx.js"


// export default ({ slice }) =>
//   <div>
//     <div>
//       <p>{slice.code_snippet.text}</p>
//
//     </div>
//   </div>


  const Code = ({ slice, language }) => {

    useEffect(() => {
      // call the highlightAll() function to style our code blocks
      Prism.highlightAll()
  })

    return (
        <pre>{slice.code_snippet.text}</pre>
    )
  }


  export default Code
