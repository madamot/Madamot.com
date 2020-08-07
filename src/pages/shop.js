import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/global.css"
import "../styles/projects.css"

import ShopItem from "../components/ShopItem"

const Shop = ({data: {allPrismicShop}}) => (
  <Layout>
    <SEO title="Shop" />
    <h1>Shop</h1>
    <p>You just hit the shop... the beauty.</p>
    <div className="projectGrid">
      {allPrismicShop.edges.map(item => <ShopItem key={item.node.id} post={item.node} />)}
    </div>
  </Layout>
)

export default Shop

export const shopQuery = graphql`
  query shop {
    __typename
    allPrismicShop {
      edges {
        node {
          id
          uid
          type
          data {
            title {
              text
            }
            product_release_date(formatString: "")
            image {
              url
            }
            price
            description {
              text
            }
          }
        }
      }
    }
  }
`
