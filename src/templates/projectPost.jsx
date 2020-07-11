import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Loading from '../components/Loading';
import SEO from "../components/seo"


import PostBody from "../components/PostBody"

import "../styles/templates/blogPage.css"


export default (props) => {
  // console.log(props);
  const doc = props.data.allPrismicProject.edges.slice(0,1).pop();

  if (!doc) return <Loading />;

  return(
    <Layout location={props.location} title={props.data.site.siteMetadata.title}>
      <SEO
        title={doc.node.data.title.text}
        description={doc.node.data.description.text}
        image={doc.node.data.image.fixed}
        pathname={props.location.pathname}
      />

      <PostBody blogPost={ doc.node } />
    </Layout>
  )
}

export const pageQuery = graphql`
query ProjectPostQuery($uid: String) {
  allPrismicProject(filter: {uid: {eq: $uid}}) {
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
            }
          }
          description {
            text
          }
          date
          body {
            ... on PrismicProjectBodyText {
              id
              slice_type
              slice_label
              primary {
                text {
                  html
                }
              }
            }
            ... on PrismicProjectBodyCodeSnippet {
              id
              slice_type
              slice_label
              items {
                code_snippet {
                  text
                }
              }
            }
            ... on PrismicProjectBodyImage {
              id
              slice_type
              slice_label
              items {
                image {
                  url
                }
              }
            }
            ... on PrismicProjectBodyEmbededVideo {
              id
              slice_type
              slice_label
              items {
                video {
                  html
                }
              }
            }
            ... on PrismicProjectBodyLink {
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
  file(relativePath: {eq: "seo.jpg"}) {
    childImageSharp {
      fixed(width: 1200) {
        height
        src
        width
      }
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}
`
