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
        <div style={{
          width: '5rem',
          paddingBottom: '50px'
        }}>
          <h1 style={{
            borderBottom: 'solid black 0.5rem',
          }}>Hi</h1>
        </div>
        <div className="bar">
          <div className="aboutBar">
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              <div className="mug">
                <img className="image" src={data.image.url} />
              </div>
              <h1 style={{textAlign:'center'}}>{data.title.text}</h1>
              <a href={CV} className="CVButton" target="_blank">CV</a>
            </div>
          </div>
        </div>
        <div className="bio">
          <h5>{data.bio.text}</h5>
        </div>
        <div>
          {data.timeline.map(timeline => (
            <div className="container" style={{
              marginBottom: '2rem',
            }}>
              <h6><span style={{
                backgroundColor: 'black'
              }}>{timeline.location_name.text}</span></h6>
              <h4>{timeline.timeline_title.text}</h4>
              <h5>{timeline.time_line_description.text}</h5>
            </div>
          ))}
        </div>
        <div className="container" style={{
          marginBottom: '4rem',
        }}>
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
        timeline {
          timeline_title {
            text
          }
          time_line_description {
            text
          }
          location_name {
            text
          }
        }
      }
    }
  }
`
