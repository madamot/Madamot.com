import React, { useState, useEffect } from 'react'
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

  const [filters, addFilters] = useState([])

  useEffect(() => {
  props.filterPosts(filters);
}, [filters]);


    const filterHandler = async (id, filterPosts) => {
      if (filters.includes(id)) {
        const newArr = filters.filter(category => id != category);
        addFilters(newArr);

        // console.log(filters);
      } else {
        // const notIn = filters.push(id)
        await addFilters(oldArray => [...oldArray, id]);
        // addFilters([...filters, id]);
        // props.filterPosts(filters);
        // console.info(filters);
      }

    }




  return (
    <div>
      <div className="filterContainer">
        <ul>
          {filterQuery.allPrismicTag.edges.map( category => (
            <li onClick={() => filterHandler(category.node.data.year.text)} className="filterButton" key={category.node.id}>
              {category.node.data.year.text} {filters.includes(category.node.data.year.text) ? cross : tick}
            </li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  )
}


export default Filter;
