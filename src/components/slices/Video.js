import React from "react"
import "../../styles/video.css"

export default ({ slice }) =>
  <div>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'relative',
        paddingBottom: '56.25%', /* 16:9 */
        height: '0',
      }}>
      <div dangerouslySetInnerHTML={{ __html: slice.video.html }} />
    </div>
  </div>
