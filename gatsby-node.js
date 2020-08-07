const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPost.jsx`)
  const projectPostTemplate = path.resolve(`src/templates/projectPost.jsx`)
  const shopPostTemplate = path.resolve(`src/templates/shopPost.jsx`)
  const result = await graphql(`
    {
      allPrismicBlog {
        edges {
          node {
            uid
            data {
              title {
                text
              }
            }
          }
        }
      }
      allPrismicProject {
        edges {
          node {
            uid
            data {
              title {
                text
              }
            }
          }
        }
      }
      allPrismicShop {
        edges {
          node {
            uid
            data {
              product_title {
                text
              }
            }
          }
        }
      }
    }
  `)
  result.data.allPrismicBlog.edges.forEach(edge => {
    createPage({
      path: `blog/${edge.node.uid}`,
      component: blogPostTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
  result.data.allPrismicProject.edges.forEach(edge => {
    createPage({
      path: `project/${edge.node.uid}`,
      component: projectPostTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
  result.data.allPrismicShop.edges.forEach(edge => {
    createPage({
      path: `shop/${edge.node.uid}`,
      component: shopPostTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
