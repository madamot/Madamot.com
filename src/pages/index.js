import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BothIslands from "../components/BothIslands"
import SEO from "../components/seo"
import SeeMoreButton from "../components/SeeMoreButton"
import ReadMoreButton from "../components/ReadMoreButton"

import "../styles/global.css"
import "../styles/index.css"

// import HeaderImg from '../images/main_island.svg'



const IndexPage = ({data: {prismicHomepage}})  => {
  const { data } = prismicHomepage


  return (
    <Layout>
      <SEO title="Home" />

      <div style={{ marginBottom: `1.45rem` }}>
        <div className="headText">
          <h5>{data.slogan.text}</h5>
          <h1 style={{ }}>{data.subtitle.text}</h1>
          <h3>{data.description.text}</h3>
          <SeeMoreButton url="project">
            View Work
          </SeeMoreButton>
        </div>

      </div>
      <div className="islands">
        <BothIslands />
      </div>

      <section className="tech">
        <div className="techBanner">
          <div className="techGrid">
            {data.services.map(service => (
              <div>
                <div>
                  <h2>{service.service.text}</h2>
                  <p>{service.service_description.text}</p>
                </div>
              </div>
            ))}
          </div>
          <h5>{data.techsubtitle.text}</h5>
          <h2>{data.technology.text}</h2>
          <p>{data.technologydescription.text}</p>
          <div className="techGrid">
            {data.tech.map(tech => (
              <div className="techItem">
                <img alt="language" style={{ height: '50px', margin: '0' }} src={tech.languageimg.fixed.src} />
                <div className="techDes">
                  <h4>{tech.techtitle.text}</h4>
                  <p>{tech.language.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="projects">
        <h1>{data.recent_projects.text}</h1>
        <p>{data.recent_projects_subtitle.text}</p>
        <div className="projectGridHome">
          {data.projects.map(project => (
            <div className="projectCard">
              <img src={project.project.document.data.image.url} alt="" />
              <h6><span style={{
                backgroundColor: 'black'
              }}>{project.project.document.tags}</span> - </h6>
              <h4>{project.project.document.data.title.text}</h4>
              <p>{project.project.document.data.description.text}</p>
              <ReadMoreButton type={project.project.document.type} url={project.project.document.uid}>
                More
              </ReadMoreButton>
            </div>
          ))}
        </div>
      </section>
      <section className="blog">
        <h1>{data.recent_blog_posts.text}</h1>
        <p>{data.recent_blog_posts_subtitle.text}</p>
        <div className="projectGridHome">
          {data.blogs.map(blog => (
            <div className="projectCard">
              <img src={blog.blog.document.data.image.url} alt="" />
              <h6><span style={{
                backgroundColor: 'black'
              }}>{blog.blog.document.tags}</span> - </h6>
              <h4>{blog.blog.document.data.title.text}</h4>
              <p>{blog.blog.document.data.description.text}</p>
              <ReadMoreButton type={blog.blog.document.type} url={blog.blog.document.uid}>
                More
              </ReadMoreButton>
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
                  description {
                    text
                  }
                  image {
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
                  image {
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
