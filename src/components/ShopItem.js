import { Link } from "gatsby"

import React from "react"

import ReadMoreButton from "../components/ReadMoreButton"

import "../styles/button.css"

const ShopItem = ({post}) =>
  <div>
    <div className="projectCard">
      <img src={post.data.image.url} alt="" />
      <h4>{post.data.title.text}</h4>
      <h5>{post.data.description.text}</h5>
      <h6>£{post.data.price}</h6>

      <h5>{post.data.product_release_date}</h5>
      
      <ReadMoreButton type={post.type} url={post.uid}>
        More
      </ReadMoreButton>
    </div>
  </div>




export default ShopItem
