/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import logo from "../assets/logo.svg" 


const Header = ({ data }) => (

    <header sx={{
        display: 'flex',
        alignItems: 'center',
        variant: 'styles.header',
        padding: 16
    }}> 
        <Link sx={{variant: 'links.main'}} to='/'>
            <img sx={{variant: 'images.logo', display: 'inline-block'}} src={logo} alt="Logo" />
        </Link>
        <div>
            <Link sx={{variant: 'links.main'}} to='/'>
                <h1 sx = {{paddingLeft: 16, margin: 0}}>{data.site.siteMetadata.title}</h1>
            </Link>
        </div>
        <div sx={{ mx: 'auto' }} />
        {/* <Link to='/underthehood'
            sx={{
                variant: 'links.nav',
                p: 2,
            }}>
            Under the hood
        </Link> */}
        <Link to='/about'
            sx={{
                variant: 'links.nav',
                p: 2,
            }}>
            About
        </Link>
    </header>

)

export default () => {
    return (
        <StaticQuery query={HeaderQuery}
            render={data => <Header data={data} />}
        />
    )
}

const HeaderQuery = graphql`query IndexPageQuery {
                        
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
`;