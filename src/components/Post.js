import { Link } from "gatsby"

import React from "react"

import ReadMoreButton from "../components/ReadMoreButton"

import "../styles/button.css"

const Post = ({post}) =>
  <div className="projectCard">
    <img src={post.document.data.image.url} alt="" />
    <ul style={{
      display: 'flex',
      flex: '1',
    }}>
      {post.document.tags.map(tag => (
        <li style={{listStyleType: 'none'}}>
          <h6>{tag} | </h6>
        </li>
      ))}
    </ul>
    <h4>{post.document.data.title.text}</h4>
    <h5>{post.document.data.description.text}</h5>
    <ReadMoreButton type={post.document.type} url={post.document.uid}>
      More
    </ReadMoreButton>
  </div>




export default Post
