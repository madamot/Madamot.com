import React from "react"


export default ({ slice }) =>
  <div>
    <div style={{
      textAlign: 'center',
      AlignItems: 'center',
      JustifyContent: 'centre',
      Display: 'flex',
    }}>
      {slice.items.map(image => (
        <img key='1' src={image.image.url} alt="" style={{
          textAlign: 'center',
        }} />
      ))}
    </div>
  </div>
