const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/post.jsx`)
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
}
