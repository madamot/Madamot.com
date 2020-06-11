import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BothIslands from "../components/BothIslands"
import SEO from "../components/seo"
import SeeMoreButton from "../components/SeeMoreButton"

import "../styles/global.css"
import "../styles/index.css"

// import HeaderImg from '../images/main_island.svg'



const IndexPage = ({data: {prismicHomepage}})  => {
  const { data } = prismicHomepage


  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ marginBottom: `1.45rem` }}>
        <div style={{ marginTop: `5.5vh`, maxWidth: '500px', position: 'absolute',  }}>
          <h6>{data.slogan.text}</h6>
          <h2 style={{ }}>{data.subtitle.text}</h2>
          <h4>{data.description.text}</h4>
          <SeeMoreButton>
            Let's Get Started!
          </SeeMoreButton>
        </div>

      </div>
      <BothIslands />
      <section className="tech">
        <div className="techBanner">
          <div className="techGrid">
            {data.services.map(service => (
              <div>
                <div>
                  <h3>{service.service.text}</h3>
                  <p>{service.service_description.text}</p>
                </div>
              </div>
            ))}
          </div>
          <h6>{data.techsubtitle.text}</h6>
          <h3>{data.technology.text}</h3>
          <p>{data.technologydescription.text}</p>
          <div className="techGrid">
            {data.tech.map(tech => (
              <div className="techItem">
                <img alt="language" style={{ height: '50px', margin: '0' }} src={tech.languageimg.fixed.src} />
                <div className="techDes">
                  <h5>{tech.techtitle.text}</h5>
                  <p>{tech.language.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="projects">
        <h2>{data.recent_projects.text}</h2>
        <p>{data.recent_projects_subtitle.text}</p>
        <div className="projectGridHome">
          {data.projects.map(project => (
            <div className="projectCard">
              <h5>{project.project.document.data.title.text}</h5>
              <SeeMoreButton type={project.project.document.type} url={project.project.document.uid}>
                See More
              </SeeMoreButton>
            </div>
          ))}
        </div>
      </section>
      <section className="blog">
        <h2>{data.recent_blog_posts.text}</h2>
        <p>{data.recent_blog_posts_subtitle.text}</p>
        <div className="projectGridHome">
          {data.blogs.map(blog => (
            <div className="projectCard">
              <h5>{blog.blog.document.data.title.text}</h5>
              <img src={blog.blog.document.data.blog_image.url} alt="" />
              <p>{blog.blog.document.data.description.text}</p>
              <SeeMoreButton type={blog.blog.document.type} url={blog.blog.document.uid}>
                See More
              </SeeMoreButton>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage

export const homeQuery = graphql`
  query homepage {
    prismicHomepage {
      data {
        description {
          text
        }
        title {
          text
        }
        subtitle {
          text
        }
        slogan {
          text
        }
        tech {
          language {
            text
          }
          languageimg {
            fixed {
              src
            }
          }
          techtitle {
            text
          }
        }
        technology {
          text
        }
        techsubtitle {
          text
        }
        technologydescription {
          text
        }
        services {
          service {
            text
          }
          service_description {
            text
          }
        }
        recent_projects {
          text
        }
        recent_projects_subtitle {
          text
        }
        recent_blog_posts {
        text
        }
        recent_blog_posts_subtitle {
          text
        }
        projects {
          project {
            document {
              ... on PrismicProject {
                id
                data {
                  title {
                    text
                  }
                }
                uid
                type
              }
            }
          }
        }
        blogs {
          blog {
            document {
              ... on PrismicBlog {
                id
                data {
                  title {
                    text
                  }
                  description {
                    text
                  }
                  blog_image {
                    url
                  }
                }
                uid
                type
                tags
              }
            }
          }
        }
      }
    }
  }
`
