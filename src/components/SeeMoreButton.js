import { Link } from "gatsby"

import React from "react"

import "../styles/button.css"

const SeeMoreButton = ({type, url, children}) =>
  <Link className="button" to={"/"+url}>
    {children}<span id="special">&rarr;</span>
  </Link>



export default SeeMoreButton
