import React from "react"


export default ({ slice }) =>
  <div>
    <div style={{
      textAlign: 'center',
    }}>
      {slice.items.map(image => (
        <img src={image.image.url} alt="" style={{
          textAlign: 'center',
        }} />
      ))}
    </div>
  </div>
