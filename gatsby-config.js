/*const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
    path: `.env.${activeEnv}`,
})*/

const photoFileSystemPlugin = { resolve: `gatsby-source-filesystem`, options: { path: `./src/photos/` } }
const assetsFileSystemPlugin = { resolve: `gatsby-source-filesystem`, name: `assets`, options: { path: `./src/assets/` } }
const gatsbySharpPlugin = {
                resolve: `gatsby-plugin-sharp`,
                options: {
                useMozJpeg: false,
                stripMetadata: true,
                defaultQuality: 75,
                },
  }

const manifestPlugin = {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Fachenteo`,
      short_name: `Fachenteo`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      display: `standalone`,
      icon: "src/assets/favico/favicon.png"
    },
  }

module.exports = {
    siteMetadata: {
        title: "Fachenteo",
        subtitle: "Sitio personal de fotografia"
    },
    plugins: [
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
        'gatsby-plugin-theme-ui',
        `gatsby-plugin-mdx`, 
        photoFileSystemPlugin,
        assetsFileSystemPlugin,
        manifestPlugin,
        gatsbySharpPlugin
    ]
}