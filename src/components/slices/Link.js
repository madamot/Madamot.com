import React from "react"


export default ({ slice }) =>
  <div>
    <div>
      <a href={slice.primary.link_item.url}>
        <div
          style={{
            fontStyle: 'italic',
            font: 'bold',
            color: 'blue',
          }} dangerouslySetInnerHTML={{ __html: slice.primary.link_item.url }} />
      </a>
    </div>
  </div>
