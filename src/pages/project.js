import React, { useState } from 'react'
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Filter from '../components/Filter';

import "../styles/global.css"
import "../styles/projects.css"

const Projects = ({data: {allPrismicProject}})  => {

  const [filters, addFilters] = useState([1,])

  const filterHandler = (id) => {
    if (filters.includes(id)) {
      const newArr = filters.filter(category => id !== category);
      addFilters(newArr);
    } else {
      const notIn = [id, ...filters]
      addFilters(notIn);
    }

  }

    return (
    <Layout>
      <SEO title="Page two" />
      <h1>Projects</h1>
      <Filter handler={filterHandler} filters={filters} />
      <div className="projectGrid">
        {allPrismicProject.edges.map(project => (
          <Link to={"/"+project.node.type+"/"+project.node.uid} key={project.node.uid} className="project">
            <h3>{project.node.data.title.text}</h3>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
export default Projects

export const projectsQuery = graphql`
  query project($filters: [String]) {
    allPrismicProject(filter: {tags: {in: $filters}}) {
      edges {
        node {
          data {
            title {
              text
            }
          }
          uid
          type
          tags
        }
      }
    }
  }
`
