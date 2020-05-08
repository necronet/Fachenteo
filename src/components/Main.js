import React from 'react'
import { Grid, Box } from 'theme-ui'
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import { shuffle } from '../utils/array'

const Main = ({photos}) => {

return (<Grid columns = {[2, null, 3]}>
        {photos.map(edge => <Box p={2}><Img fluid = {edge.node.fluid} /></Box>)}
        </Grid>
        )
}

export default () => (<StaticQuery query = {graphql `query AllImagesQuery {
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 800, quality: 75) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }`} render = { data => <Main photos={shuffle(data.allImageSharp.edges)}/> } />)


