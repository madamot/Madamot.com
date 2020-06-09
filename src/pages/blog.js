import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/global.css"
import "../styles/projects.css"

const Blog = ({data: {allPrismicBlog}}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Blog</h1>
    <div className="projectGrid">
      {allPrismicBlog.edges.map(blog => (
        <Link to={blog.node.type+"/"+blog.node.uid} key={blog.node.uid} className="project">
          <h3>{blog.node.data.title.text}</h3>
        </Link>
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
          uid
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
`
