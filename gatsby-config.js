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
         name:'Projects',
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
    siteUrl: 'https://adamhorne.co.uk',
  },
  plugins: [
    `gatsby-plugin-sitemap`,
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
        linkResolver: ({ node, key, value }) => doc => {
          if (doc.type === 'blog') {
            return `/blog/${doc.uid}`
          }

          // URL for a product type
          if (doc.type === 'project') {
            return `/project/${doc.uid}`
          }

          // URL for a page type
          if (doc.type === 'shop') {
            return `/shop/${doc.uid}`
          }
        },
        schemas: {
          homepage: require('./src/schemas/home.json'),
          blog: require('./src/schemas/blog.json'),
          project: require('./src/schemas/project.json'),
          tag: require('./src/schemas/tag.json'),
          about: require('./src/schemas/about.json'),
          shop: require('./src/schemas/shop.json'),
         // blog_post: require('./src/schemas/blog_post.json'),
       },


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
			resolve: 'gatsby-plugin-snipcartv3',
			options: {
				apiKey: 'OGNiMjEwODgtMzkyMC00ZDM4LWE4MDMtOTBlYTJjODk1NDQyNjM3MzI0MTU1MDEzNjQ2ODA0'

			}
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
