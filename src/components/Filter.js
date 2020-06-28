import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import "../styles/filter.css"

const Filter = ( props ) => {
  const filterQuery = useStaticQuery(graphql`
    query GET_CATEGORIES {
      allPrismicTag {
        edges {
          node {
            data {
              year {
                text
              }
            }
            id
          }
        }
      }
    }
  `)




  const tick = "\u2705"
  const cross = "\u274C"

  return (
    <div>
      <div>
        <h3>Filter by:</h3>
      </div>
      <div className="filterContainer">
        <ul>
          {filterQuery.allPrismicTag.edges.map( category => (
            <li onClick={() => props.handler(category.node.data.year.text)} className="filterButton" key={category.node.id}>
              <p>{category.node.data.year.text} {props.filters.includes(category.node.data.year.text) ? cross : tick}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  )
}


export default Filter;
