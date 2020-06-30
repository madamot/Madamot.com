import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/header.css"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      // borderBottom: '0.2px solid grey',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
        {/* <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
          // color: `white`,
          textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1> */}
        <div>
          <nav>
            <ul className="navList">
              {menuLinks.map(link => (
                <li
                  key={link.name}
                >
                  <Link to={link.link}>
                    <p>
                      {link.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
