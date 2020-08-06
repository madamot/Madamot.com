require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Adam Horne`,
    menuLinks:[
      {
         name:'Home',
         link:'/'
      },
      {
         name:'About',
         link:'/about'
      },
      {
         name:'Project',
         link:'/project'
      },
      {
         name:'Blog',
         link:'/blog'
      },
      {
         name:'Shop',
         link:'/shop'
      },
    ],
    description: `My name is Adam Horne. I create digital products to help businesses be more efficient and provide better experiences to their end-users. I’m a dedicated Digital Media Development student building full stack apps and websites, specialising in React, React Native and Django.`,
    author: `Adam Horne`,
    tags: ["portfolio", "software developer", "developer", "web developer", "app developer", "Adam Horne", "Winchester"],
    siteUrl: 'https://madamot.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `madamotportfolio`,
        accessToken: `${process.env.API_KEY}`,
        schemas: {
          homepage: require('./src/schemas/home.json'),
          blog: require('./src/schemas/blog.json'),
          project: require('./src/schemas/project.json'),
          tag: require('./src/schemas/tag.json'),
          about: require('./src/schemas/about.json'),
         // blog_post: require('./src/schemas/blog_post.json'),
       }
        // linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-127738270-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
