import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/global.css"
import "../styles/projects.css"

import ShopItem from "../components/ShopItem"

const Shop = ({data: {allPrismicShop}}) => (
  <Layout>
    <SEO
      title="Shop"
      description="Before I fell in love with web development graphic design was my passion, it's something I still enjoy and in my spare time I like to make cool art which you can find in this shop."
      image={allPrismicShop.edges.node[0].data.image.url}
      pathname="https://www.madamot.com/blog"
    />
    <h1>Shop</h1>
    <p>Before I fell in love with web development graphic design was my passion, it's something I still enjoy and in my spare time I like to make cool art which you can find in this shop. All prepared with care with giclée printing quality on beautiful, thick 192 g/m² enhanced matte paper.</p>
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
