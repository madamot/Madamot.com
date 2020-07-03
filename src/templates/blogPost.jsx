import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Loading from '../components/Loading';
import PostBody from "../components/PostBody"
import SEO from "../components/seo"

import "../styles/templates/blogPage.css"


export default (props) => {
  // console.log(props);
  const doc = props.data.allPrismicBlog.edges.slice(0,1).pop();

  if (!doc) return <Loading />;

  return(
    <Layout>
      <SEO title={doc.node.uid} />
      <PostBody blogPost={ doc.node } />
    </Layout>
  )
}

export const pageQuery = graphql`
query BlogPostQuery($uid: String) {
  allPrismicBlog(filter: {uid: {eq: $uid}}) {
    edges {
      node {
        uid
        type
        id
        tags
        data {
          title {
            text
          }
          image {
            url
          }
          description {
            text
          }
          date
          body {
            ... on PrismicBlogBodyText {
              id
              slice_type
              slice_label
              primary {
                text {
                  html
                }
              }
            }
            ... on PrismicBlogBodyCodeSnippet {
              slice_type
              slice_label
              items {
                code_snippet {
                  text
                }
              }
            }
            ... on PrismicBlogBodyImage {
              id
              slice_type
              slice_label
              items {
                image {
                  url
                }
              }
            }
            ... on PrismicBlogBodyEmbededVideo {
              id
              slice_type
              items {
                video {
                  html
                }
              }
            }
          }
          category {
            slug
          }
        }
      }
    }
  }
}

`
