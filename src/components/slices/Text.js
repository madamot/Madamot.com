import React from "react"


export default ({ slice }) =>
  <div>
    <div>
      <div dangerouslySetInnerHTML={{ __html: slice.primary.text.html }} />
    </div>
  </div>
