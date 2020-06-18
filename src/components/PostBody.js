import React from "react"

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
        <h6>Home > {blogPost.type}</h6>
        <h1>{blogPost.data.title.text}</h1>
        <h4>{blogPost.data.description.text}</h4>
        <h6>{blogPost.data.date}  |  {blogPost.tags}</h6>
      </div>
      <div className="content-container"
        style={{
          paddingTop: `5rem`,

        }}>
        <div className="content-body">
          <div>

            <img className="image" src={blogPost.data.image.url} />
          </div>
          <PostSlices slices={ blogPost.data.body }/>
        </div>
      </div>
    </div>
  )
}

export default PostBody
