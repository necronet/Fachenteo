/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Grid, Box } from 'theme-ui'
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import { shuffle } from '../utils/array'

const Main = ({photos}) => {

return (<Grid width = {[200, null, 300]} gap = {0}>
        { 
        photos.map( (edge, index) => (
                <Box key={index} p={.5}><Img fluid = {edge.node.childImageSharp.fluid} /></Box>
                ))
        }</Grid>
        )
}

export default () => (<StaticQuery query = {graphql `query AllImagesQuery {
    allFile(filter: {relativeDirectory:{eq:"main"}}) {
        edges {
      node {
        childImageSharp {
          
          fluid(maxWidth: 400, maxHeight: 250) {
        base64
        aspectRatio
        src
        srcSet
        sizes
            
        }
        
        }
      }
      }
    }
  }`} render = { data => <Main photos={shuffle(data.allFile.edges)}/> } />)


