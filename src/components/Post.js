import { Link } from "gatsby"

import React from "react"

import ReadMoreButton from "../components/ReadMoreButton"

import "../styles/button.css"

const Post = ({post}) =>
<div>
  <div className="projectCard">
    <img src={post.data.image.url} alt="" />
    <ul style={{
      display: 'flex',
      flex: '1',
      marginLeft: '0',
      marginRight: '0',
      marginTop: '0',
      paddingBottom: '0',
      paddingLeft: '0',
      paddingRight: '0',
      paddingTop: '0',
      marginBottom: '0',
    }}>
      {post.tags.map(tag => (
        <li style={{listStyleType: 'none'}}>
          <h6>{tag}</h6>
        </li>
      ))}
    </ul>
    { //Check if has date
      (post.data.date)
        ? <h5>{post.data.date}</h5>
        : null
    }
    <h4>{post.data.title.text}</h4>
    <h5 className="postDes">{post.data.description.text}</h5>
    <ReadMoreButton type={post.type} url={post.uid}>
      More
    </ReadMoreButton>
  </div>
</div>




export default Post
