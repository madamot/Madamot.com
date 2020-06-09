import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/global.css"
import "../styles/projects.css"

const Projects = ({data: {allPrismicProject}})  => {

    return (
    <Layout>
      <SEO title="Page two" />
      <h1>Projects</h1>
      <div className="projectGrid">
        {allPrismicProject.edges.map(project => (
          <Link to={project.node.type+"/"+project.node.uid} key={project.node.uid} className="project">
            <h3>{project.node.data.title.text}</h3>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
export default Projects

export const projectsQuery = graphql`
  query project {
    allPrismicProject {
      edges {
        node {
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
