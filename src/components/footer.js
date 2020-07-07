import { Link } from "gatsby"
import React from "react"

import { FaInstagram, FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

import "../styles/footer.css"

const Footer = ({menuLinks}) => (
  <footer>
    <div class="footContainer">
      <div className="footerLinks">
        <div className="footerDes">
          <p className="footerDesText"><strong>Madamot</strong> is a Digital Agency founded by Adam Horne from London England, currently living in Winchester. We create digital products to help businesses be more efficient and provide better experiences to their end-users. We build full stack apps and websites, specialising in React, React Native and Django.</p>
          <br />
        </div>
        <div></div>
        <div className="socials">
          <ul>
            <a style={{
              paddingRight: '2rem',
            }} target="_blank" rel="noreferrer" href="https://www.instagram.com/adam.madamot/"><FaLinkedinIn /></a>
            <a style={{
              paddingRight: '2rem',
            }} target="_blank" rel="noreferrer" href="https://www.instagram.com/adam.madamot/"><FaInstagram /></a>
            <a style={{
              paddingRight: '2rem',
            }} target="_blank" rel="noreferrer" href="https://github.com/madamot"><FaGithub /></a>
            <a style={{
              paddingRight: '2rem',
            }} target="_blank" rel="noreferrer" href="https://www.facebook.com/madamots/"><FaFacebookF /></a>
          </ul>
        </div>
        <div className="links">
          <nav>
            <ul style={{
              listStyleType: 'none',
              display: 'flex',
              flex: '1',
            }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    paddingLeft: '2rem',
                  }}>
                  <Link to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <hr />
      <h5>© {new Date().getFullYear()} Madamot.</h5>
    </div>
  </footer>
)


export default Footer
