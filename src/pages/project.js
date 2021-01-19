import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Filter from '../components/Filter';
import ReadMoreButton from "../components/ReadMoreButton"
import Post from "../components/Post"

import "../styles/global.css"
import "../styles/projects.css"

const Projects = ({data: {allPrismicProject}})  => {

  const master = allPrismicProject.edges

  const [items, projectPostItems] = useState(allPrismicProject.edges)


  const filterPosts = (category) => {
    const result = master.filter(item => !category.includes(item.node.data.category.slug));

    // const result = items.filter(project => project.node.data.category.slug.find(category => category.includes(project.node.data.category.slug)));
    projectPostItems(result);

    // projectPostItems({
    //   projectPostItems: [
    //     items.filter(edge => {
    //       return edge.node.data.category.slug.find(year => category.includes(year))
    //     }),
    //   ]
    // })
  }

    return (
    <Layout>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <Filter filterPosts={filterPosts} />
      <div className="projectGrid">
        {items.map(post => <Post key={post.node.id} post={post.node} />)}
      </div>
    </Layout>
  )
}
export default Projects

export const projectsQuery = graphql`
  query project($filters: [String]) {
    allPrismicProject(filter: {data: {category: {slug: {in: $filters}}}}) {
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

// export const projectsQuery = graphql`
//   query project($filters: [String]) {
//     allPrismicProject(filter: {data: {category: {slug: {in: $filters}}}}) {
//     edges {
//       node {
//         id
//         uid
//         type
//         tags
//         data {
//           category {
//             slug
//           }
//           title {
//             text
//           }
//           description {
//             text
//           }
//           image {
//             url
//           }
//         }
//       }
//     }
//   }
//   }
// `
