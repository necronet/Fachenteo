/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Grid, Container, Box } from 'theme-ui'
import ProfileBox from './ProfileBox'
import Img from 'gatsby-image'

const PhotoProfile = ({data}) => {
    return <Img sx={{variant: 'images.avatar'}} fixed={data.file.childImageSharp.fixed} />
}

const ProfileContainer = () => {
    return (
        <Container p={4}>
            <Grid columns={[1, null, '1fr 2fr', '1fr 4fr']} gap = {0} p = {4}>
            <Box sx = {{ textAlign: 'center'}}>
            <StaticQuery query = {PhotoProfileQuery} render = { data => <PhotoProfile data = {data} /> } />
            <div>
                <ProfileBox type="github" />
                <ProfileBox type="linkedin" />
                <ProfileBox type="twitter" />
            </div>
            </Box>
            <Box>
                    <p>
                    <b>Fachenteo</b> is a static website built with gatsby in order to keep personal photography hobby up in the cloud. The site serve only personal purpose
                    of self improvement both in photography and React development, if you are interested in the tecnology behind this site you can visit Under the hood section
                    where I go into detail on how the site was built.
                    </p>
                    <p>
                    <b>Fachenteo</b> is just a site that I'd like to keep personal photographies that otherwise don't like to post on social media. As a software developer I've worked with multiple companies accross the world from Booking.com in the netherlands
                    all the way to many companies in the bay area including Stubhub, Ebay, and Paypal Inc. I've always enjoy learning and toying
                    around with new paradigm, platforms, frameworks and tools.
                    </p>
            </Box>
        </Grid>
        
    </Container>)
}

export default ProfileContainer;

const PhotoProfileQuery = graphql`query PhotoProfileQuery {

    file(relativePath:{ eq: "myself/moi.JPG"}) {
    	childImageSharp {
            fixed(width: 150, grayscale: true) {
                ...GatsbyImageSharpFixed
        }
      }
  	}
}
`;