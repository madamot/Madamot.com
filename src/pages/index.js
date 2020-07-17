import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BothIslands from "../components/BothIslands"
import SeeMoreButton from "../components/SeeMoreButton"
import ReadMoreButton from "../components/ReadMoreButton"
import Post from "../components/Post"

import homePage from "../images/homePage.png";

import "../styles/global.css"
import "../styles/index.css"




const IndexPage = ({data: {prismicHomepage}})  => {
  const { data } = prismicHomepage


  return (
    <Layout>
      <SEO
        title={data.subtitle.text}
        description={data.description.text}
        image={homePage}
        pathname={props.location.pathname}
      />

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
                  <h5>{service.service_description.text}</h5>
                </div>
              </div>
            ))}
          </div>
          <h5>{data.techsubtitle.text}</h5>
          <br />
          <h2>{data.technology.text}</h2>
          <h3>{data.technologydescription.text}</h3>
          <div className="techGrid">
            {data.tech.map(tech => (
              <div className="techItem">
                <img alt="language" style={{ height: '50px', margin: '0' }} src={tech.languageimg.fixed.src} />
                <div className="techDes">
                  <h4>{tech.techtitle.text}</h4>
                  <h5>{tech.language.text}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="projects">
        <h1>{data.recent_projects.text}</h1>
        <h5>{data.recent_projects_subtitle.text}</h5>
        <div className="projectGridHome">
          {data.projects.map(post => <Post key={post.project.document.id} post={post.project.document} />)}
        </div>
      </section>
      <section className="blog">
        <h1>{data.recent_blog_posts.text}</h1>
        <p>{data.recent_blog_posts_subtitle.text}</p>
        <div className="projectGridHome">
          {data.blogs.map(post => <Post key={post.blog.document.id} post={post.blog.document} />)}
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
                  date
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
