import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReadMoreButton from "../components/ReadMoreButton"
import CV from "../assets/Adam_Horne_CV.pdf"

import "../styles/global.css"
import "../styles/about.css"

const About = ({data: {prismicAbout}}) => {
  const { data } = prismicAbout
    return (
      <Layout>
        <SEO title="About" />
        <div className="bar">
          <div className="aboutBar">
            <div>
              <div className="mug">
                <img  width="400vw" src={data.image.url} />
              </div>
              <a href={CV} target="_blank">CV</a>
              <h1 style={{textAlign:'center'}}>{data.title.text}</h1>
            </div>
          </div>
        </div>
        <h4>{data.bio.text}</h4>
        <div className="container">
          <p>{data.story.text}</p>
        </div>
      </Layout>
    )
}

export default About

export const aboutQuery = graphql`
  query aboutpage {
    prismicAbout {
      data {
        image {
          url
        }
        title {
          text
        }
        bio {
          text
        }
        story {
          text
        }
      }
    }
  }
`
