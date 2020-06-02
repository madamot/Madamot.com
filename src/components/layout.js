/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./footer.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <div className="footerLinks">
            <div className="footerDes">
              <p className="footerDesText"><strong>Madamot</strong> is a Digital Agency founded by Adam Horne from London England. We create digital products to help businesses be more efficient and provide better experiences to their end-users. We build full stack apps and websites, specialising in React, React Native and Django.</p>
            </div>
            <div></div>
            <div className="socials">
              <ul>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/adam.madamot/"><li className="link insta">instagram</li></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/madamot"><li className="link git">Github</li></a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/madamots/"><li className="link fb">Facebook</li></a>
              </ul>
            </div>
            <div className="links">
              <ul>
                <li className="link">links</li>
                <li className="link">links</li>
                <li className="link">links</li>
              </ul>
            </div>
          </div>

          <hr />
          <h5>© {new Date().getFullYear()} Madamot.</h5>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
