import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import HeroIsland from "../components/HeroIsland"
import SecondIsland from "../components/SecondIsland"
import SEO from "../components/seo"

// import HeaderImg from '../images/main_island.svg'



const IndexPage = ({data: {prismicHomepage}})  => {
  const { data } = prismicHomepage

  console.log(data);

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ marginBottom: `1.45rem` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridColumnGap: '50px', gridRowGap: '50px'}}>
          <div>
            <h1>{data.title.text}</h1>
            {/* <h2>{data.subtitle.text}</h2> */}
            <p>{data.description.text}</p>
          </div>
          <HeroIsland style={{maxWidth: `300px`}}/>
          <SecondIsland />
          <div>hi</div>
        </div>
      </div>
      <Link to="blog/test-blog/">Go to test</Link> <br />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}
export default IndexPage

export const homeQuery = graphql`
  query homepage {
    prismicHomepage {
      data {
        description {
          text
          raw
          html
        }
        title {
          text
        }
      }
    }
}
`
