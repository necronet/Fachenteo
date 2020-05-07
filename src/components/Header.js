import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const Header = ({ data }) => (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  )

export default () => { 
                return (
                <StaticQuery query = {
                    graphql`query IndexPageQuery {
                        site {
                        siteMetadata {
                                title 
                        }
                      }
                    }
                    `}
                render = { data => <Header data={data}/> }
                />
                )
            }