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

  // render() {
  //   const post = this.props.data.markdownRemark
    // const siteTitle = props.data.site.siteMetadata.title
  //   const image = props.data.allFile.edges.node.childImageSharp.resize

  return(
    <Layout location={props.location}>
      <SEO
        title={doc.node.data.title.text}
        description={doc.node.data.description.text}
        image={doc.node.data.image.fixed}
        pathname={"https://www.madamot.com/"+props.location.pathname}
      />
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
            fixed(width: 1200) {
              src
              height
              width
            }
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
            ... on PrismicBlogBodyLink {
              id
              primary {
                link_item {
                  url
                }
              }
              slice_label
              slice_type
            }
          }
          category {
            slug
          }
        }
      }
    }
  }
  allFile(filter: {name: {eq: "images/seo.jpg"}}) {
    edges {
      node {
        childImageSharp {
          resize(width: 1200) {
            src
            height
            width
          }
        }
      }
    }
  }
}

`
