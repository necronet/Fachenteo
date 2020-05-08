/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link, StaticQuery, graphql } from "gatsby"


const Header = ({ data }) => (

    <header sx={{
        display: 'flex',
        alignItems: 'center',
        variant: 'styles.header',
    }}>
        <Link to='/'
            sx={{
                variant: 'styles.navlink',
                p: 2,
            }}>
            {data.site.siteMetadata.title}
        </Link>
        <div sx={{ mx: 'auto' }} />
        <Link to='/blog'
            sx={{
                variant: 'styles.navlink',
                p: 2,
            }}>
            Under the hood
        </Link>
        <Link to='/about'
            sx={{
                variant: 'styles.navlink',
                p: 2,
            }}>
            About
        </Link>
    </header>

)

export default () => {
    return (
        <StaticQuery query={
            graphql`query IndexPageQuery {
                        
                        site {
                              siteMetadata {
                                  title 
                                  }
                          }
                
                        allFile(filter: {relativeDirectory:{eq:"featured"}}) {
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
                        
                  }
                    `}
            render={data => <Header data={data} />}
        />
    )
}