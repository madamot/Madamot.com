import React from "react"

import "../../styles/slices.css"


export default ({ slice }) =>
  <div>
    <div>
      <div id={slice.id} className="textDiv" dangerouslySetInnerHTML={{ __html: slice.primary.text.html }} />
    </div>
  </div>
