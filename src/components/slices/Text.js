import React from "react"

import "../../styles/slices.css"


export default ({ slice }) =>
  <div>
    <div>
      <div className="textDiv" dangerouslySetInnerHTML={{ __html: slice.primary.text.html }} />
    </div>
  </div>
