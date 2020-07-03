import React from "react"


export default ({ slice }) =>
  <div>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: `2rem`,
        width: '100%',
        height: '100%',
      }}>
      <div dangerouslySetInnerHTML={{ __html: slice.video.html }} />
    </div>
  </div>
