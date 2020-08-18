import React from "react"
import { Link } from "gatsby"

import PostSlices from "./PostSlices"

const ShopBody = ({ shopPost, itemURL }) => {
// const titled = blogPost.title.length !== 0;
// console.log(blogPost);

  return (
    <div>
      <div
        style={{
          // paddingTop: `4rem`,
          paddingBottom: `2rem`,
        }}>


        <h5><Link to="/">Home</Link> > <Link to={shopPost.type}>{shopPost.type}</Link></h5>
        {/* <h4>{shopPost.data.date}  |  {shopPost.data.category.slug}</h4> */}
      </div>
      <div className="content-container"
        style={{
          paddingTop: `5rem`,

        }}>
        <div className="content-body">
          <div className="shopGrid">
            <div>
              <img className="image" alt="" src={shopPost.data.image.url} />
            </div>
            <div>
              <h2>{shopPost.data.title.text}</h2>
              <br/>
              <h3>{shopPost.data.description.text}</h3>
              <h6>£{shopPost.data.price}</h6>
              <br/>
              <br/>
              <button
                className="snipcart-add-item"
                data-item-id={shopPost.uid}
                data-item-price={shopPost.data.price}
                data-item-url={itemURL}
                data-item-description={shopPost.data.description.text}
                data-item-image={shopPost.data.image.url}
                data-item-name={shopPost.data.title.text}
              >
                Add to cart
              </button>
            </div>
          </div>

          <PostSlices slices={ shopPost.data.body }/>
        </div>
      </div>
    </div>
  )
}

export default ShopBody
