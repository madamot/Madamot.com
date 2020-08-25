import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReadMoreButton from "../components/ReadMoreButton"
import Post from "../components/Post"

import "../styles/global.css"
import "../styles/projects.css"

const Blog = ({data: {allPrismicBlog}}) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <div className="projectGrid">
      {allPrismicBlog.edges.map(post => <Post key={post.node.id} post={post.node} />)}
    </div>
  </Layout>
);

export default Blog

export const projectsQuery = graphql`
  query blog {
    allPrismicBlog(sort: {fields: data___date, order: DESC}) {
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
            date
          }
        }
      }
    }
  }
`
