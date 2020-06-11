import React from "react"
import Img from 'gatsby-image'


export default ({ slice }) =>
  <div>
    <div>
      {slice.items.map(image => (
        <img src={image.image.url} />
      ))}
    </div>
  </div>
