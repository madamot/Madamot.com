import { Link } from "gatsby"
import React from "react"

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
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/adam.madamot/"><li className="link insta">instagram</li></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/madamot"><li className="link git">Github</li></a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/madamots/"><li className="link fb">Facebook</li></a>
          </ul>
        </div>
        <div className="links">
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

      <hr />
      <h5>© {new Date().getFullYear()} Madamot.</h5>
    </div>
  </footer>
)


export default Footer
