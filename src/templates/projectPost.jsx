import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data: { prismicProject } }) => {
  const { data } = prismicProject

  return (
    <React.Fragment>
      <Layout>
        <SEO title="{data.title.uid}" />
        <h1>{data.title.text}</h1>
      </Layout>
    </React.Fragment>
  )
}

export default Post

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
      }
    }
  }
`
