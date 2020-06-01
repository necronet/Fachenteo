import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from 'gatsby-image'

export default ({data}) => <Layout>
                                <Img fluid={data.file.childImageSharp.fluid} />
                            </Layout>
                    

export const query = graphql`
query SingleImageQuery($id: String!) {
    file(id:{ eq: $id}) {
          childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
          }
        }
        }
  }
`