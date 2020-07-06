import React from "react"


export default ({ slice }) =>
  <div>
    <div>
      <a href={slice.primary.link_item.url}>
        <div dangerouslySetInnerHTML={{ __html: slice.primary.link_item.url }} />
      </a>
    </div>
  </div>
