import React from "react"

import Text from "../components/slices/Text"
import Code from "../components/slices/Code"
import Image from "../components/slices/Image"
import Video from "../components/slices/Video"

const PostSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch(slice.slice_type) {
        case 'text': return (
          <div key={ index } className="slice">
            { <Text key={index} slice={ slice } /> }
          </div>
        )

        case 'code_snippet': return (
          <div key={ index } className="slice">
            {slice.items.map(code => (
              <Code key={index} slice={ code } language={ slice.slice_label } />
            ))}
          </div>
        )

        case 'image': return (
          <div key={ index } className="slice">
            { <Image key={index} slice={ slice } style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }} /> }
          </div>
        )

        case 'embeded_video': return (
          <div key={ index } className="slice">
            {slice.items.map(video => (
              <Video key={index} slice={ video } />
            ))}
          </div>
        )

        default: return
      }
    })();
    return res;
  })
}

export default PostSlices
