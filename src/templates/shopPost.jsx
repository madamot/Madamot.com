import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Loading from '../components/Loading';
import SEO from "../components/seo"


import ShopBody from "../components/ShopBody"

import "../styles/templates/blogPage.css"
import "../styles/templates/shopItem.css"


export default (props) => {
  console.log(props);
  const doc = props.data.allPrismicShop.edges.slice(0,1).pop();

  if (!doc) return <Loading />;

  const itemURL = `${props.data.site.siteMetadata.siteUrl}${props.location.pathname}`

  return(
    <Layout>
      <SEO
        title={doc.node.data.title.text}
        description={doc.node.data.description.text}
        image={doc.node.data.image.fixed}
        pathname={props.location.pathname}
      />
      <ShopBody shopPost={ doc.node } itemURL={itemURL}/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ShopPost($uid: String) {
    __typename
    allPrismicShop(filter: {uid: {eq: $uid}}) {
      edges {
        node {
          uid
          type
          id
          data {
            title {
              text
            }
            image {
              url
              fixed(width: 1200) {
                src
              }
            }
            description {
              text
            }
            product_release_date(formatString: "")
            price
            related_products {
              id
            }
            body {
            ... on PrismicShopBodyImage {
              id
              slice_type
              slice_label
              items {
                image {
                  url
                }
              }
            }
            ... on PrismicShopBodyText {
              id
              slice_type
              slice_label
              primary {
                text {
                  html
                }
              }
            }
          }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
