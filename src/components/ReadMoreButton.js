import { Link } from "gatsby"

import React from "react"

import "../styles/button.css"

const ReadMoreButton = ({type, url, children}) =>
  <Link className="readbutton" to={type+"/"+url}>
    {children}<span id="special">&rarr;</span>
  </Link>



export default ReadMoreButton
