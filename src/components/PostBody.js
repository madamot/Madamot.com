import React from "react"
import { Link } from "gatsby"

import PostSlices from "../components/PostSlices"

const PostBody = ({ blogPost }) => {
// const titled = blogPost.title.length !== 0;
// console.log(blogPost);

  return (
    <div>
      <div
        style={{
          paddingTop: `4rem`,
          paddingBottom: `2rem`,
        }}>


        <h5><Link to="/">Home</Link> > <Link to={blogPost.type}>{blogPost.type}s</Link></h5>
        <h1>{blogPost.data.title.text}</h1>
        <h3>{blogPost.data.description.text}</h3>
        <h4>{blogPost.data.date}  |  {blogPost.data.category.slug}</h4>
      </div>
      <div className="content-container"
        style={{
          paddingTop: `5rem`,

        }}>
        <div className="content-body">
          <div>

            <img className="image" alt="" src={blogPost.data.image.url} />
          </div>
          <PostSlices slices={ blogPost.data.body }/>
        </div>
      </div>
    </div>
  )
}

export default PostBody
