import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReadMoreButton from "../components/ReadMoreButton"

import "../styles/global.css"
import "../styles/projects.css"

const Blog = ({data: {allPrismicBlog}}) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <div className="projectGrid">
      {allPrismicBlog.edges.map(blog => (
        <div className="projectCard">
          <img src={blog.node.data.image.url} alt="" />
          <ul style={{
            display: 'flex',
            flex: '1',
          }}>
            {blog.node.tags.map(tag => (
              <li style={{listStyleType: 'none'}}>
                <h6>{tag} | </h6>
              </li>
            ))}
          </ul>
          <h4>{blog.node.data.title.text}</h4>
          <h5>{blog.node.data.description.text}</h5>
          <ReadMoreButton key={blog.node.uid} type={blog.node.type} url={"/"+blog.node.uid}>
            More
          </ReadMoreButton>
        </div>
      ))}
    </div>
  </Layout>
)

export default Blog

export const projectsQuery = graphql`
  query blog {
    allPrismicBlog {
      edges {
        node {
          id
          uid
          type
          tags
          data {
            category {
              slug
            }
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
        }
      }
    }
  }
`
