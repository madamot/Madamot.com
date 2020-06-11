import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Text from "../components/slices/Text"
import Code from "../components/slices/Code"
import Image from "../components/slices/Image"

import "../styles/templates/blogPage.css"

const PostSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch(slice.slice_type) {
        case 'text': return (
          <div key={ index } className="slice">
            { <Text slice={ slice } /> }
          </div>
        )

        case 'code_snippet': return (
          <div key={ index } className="slice">
            { <Code slice={ slice } /> }
          </div>
        )

        case 'image': return (
          <div key={ index } className="slice">
            { <Image slice={ slice } /> }
          </div>
        )

        default: return
      }
    })();
    return res;
  })
}

const PostBody = ({ blogPost }) => {
// const titled = blogPost.title.length !== 0;
console.log(blogPost);

  return (
    <div className="content-container">
      <div>
        <div>
          <h6>{blogPost.tags}</h6>
          <h1>{blogPost.data.title.text}</h1>
          <h4>{blogPost.data.description.text}</h4>
          <h6>{blogPost.data.date}</h6>
        </div>
        <img className="image" src={blogPost.data.blog_image.url} />
      </div>
      <PostSlices slices={ blogPost.data.body }/>
    </div>
  )
}

export default (props) => {
  // console.log(props);
  const doc = props.data.allPrismicBlog.edges.slice(0,1).pop();

  if (!doc) return null;

  return(
    <Layout>
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
          blog_image {
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
          }
        }
      }
    }
  }
}

`
