import { Link } from "gatsby"

import React from "react"

import ReadMoreButton from "../components/ReadMoreButton"

import "../styles/button.css"

const Post = ({post}) =>
  <div className="projectCard">
    <img src={post.data.image.url} alt="" />
    <ul style={{
      display: 'flex',
      flex: '1',
    }}>
      {post.tags.map(tag => (
        <li style={{listStyleType: 'none'}}>
          <h6>{tag} | </h6>
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




export default Post
