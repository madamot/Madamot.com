import React from "react"


export default ({ slice }) =>
  <div>
    <div>
      {slice.items.map(code => (
        <p>{code.code_snippet.text}</p>
      ))}
    </div>
  </div>
