/*const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
    path: `.env.${activeEnv}`,
})*/

const fileSystemPlugin = { resolve: `gatsby-source-filesystem`, options: { path: `./src/photos/` } }

module.exports = {
    siteMetadata: {
        title: "Fachenteo",
        subtitle: "Sitio personal de fotografia"
    },
    plugins: [
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
        'gatsby-plugin-theme-ui',
        fileSystemPlugin
    ]
}