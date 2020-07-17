import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReadMoreButton from "../components/ReadMoreButton"
import Post from "../components/Post"

import homePage from "../images/homePage.png";

import "../styles/global.css"
import "../styles/projects.css"

const Blog = (props, {data: {allPrismicBlog}}) => (
  <Layout>
    <SEO
      title="Blog"
      description="Code snippets, tips and things I learn along the way but also my experience going through this industry and pursuing a course in Digital Media Development."
      image={homePage}
      pathname={props.location.pathname}
    />
    <h1>Blog</h1>
    <div className="projectGrid">
      {allPrismicBlog.edges.map(post => <Post key={post.node.id} post={post.node} />)}
    </div>
  </Layout>
);

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
            date
          }
        }
      }
    }
  }
`
