import React, { useState } from 'react'
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Filter from '../components/Filter';
import ReadMoreButton from "../components/ReadMoreButton"

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
      <SEO title="Projects" />
      <h1>Projects</h1>
      {/* <Filter handler={filterHandler} filters={filters} /> */}
      <div className="projectGrid">
        {allPrismicProject.edges.map(project => (
          <div className="projectCard">
            <img src={project.node.data.image.url} alt="" />
            <ul style={{
              display: 'flex',
              flex: '1',
            }}>
              {project.node.tags.map(tag => (
                <li style={{listStyleType: 'none'}}>
                  <h6>{tag} | </h6>
                </li>
              ))}
            </ul>
            <h4>{project.node.data.title.text}</h4>
            <h5>{project.node.data.description.text}</h5>
            <ReadMoreButton key={project.node.uid} type={project.node.type} url={"/"+project.node.uid}>
              More
            </ReadMoreButton>
          </div>
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
