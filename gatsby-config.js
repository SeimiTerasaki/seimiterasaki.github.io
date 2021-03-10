
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Seimi Terasaki`,
    description: `Professional portfolio of Seimi Terasaki. Web Develop | JAM stack | MERN stack`,
    author: `Seimi Terasaki`,
    siteUrl: `https://seimiterasaki.github.io/`,
  },
  plugins: [
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Seimi Terasaki",
        short_name: "Seimi Terasaki",
        start_url: "/",
        icon: "./src/images/favicon.png",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images/assets`),
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images/main`),
        name: `main`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {	
      resolve: 'gatsby-source-filesystem',	
      options: {	
        path: `${__dirname}/static/`,	
        name: 'static',	
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
  ],
}
