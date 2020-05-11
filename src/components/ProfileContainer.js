/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Grid, Container, Flex, Box } from 'theme-ui'
import ProfileBox from './ProfileBox'
import Img from 'gatsby-image'

const PhotoProfile = ({data}) => {
    return <Img sx={{variant: 'images.avatar'}} fixed={data.file.childImageSharp.fixed} />
}

const ProfileContainer = () => {
    return (
        <Container p={4}>
            <Grid columns={[1, null, '1fr 2fr', '1fr 4fr']} gap = {0} p = {4}>
            <StaticQuery query = {PhotoProfileQuery} render = { data => <PhotoProfile data = {data} /> } />
            <Box>
                    As a software developer I've worked with multiple companies accross the world from Booking.com in the netherlands
                    all the way to many companies in the bay area including Stubhub, Ebay, and Paypal Inc. I've always enjoy learning and toying
                    around with new paradigm, platforms, frameworks and tools. This site is intended to be yet another learning experience with building
                    a relative quick static website with GatsbyJS and other React oriented tools. You can read more about how at the under the hood section.
            </Box>
        </Grid>
        
        <Grid
            sx={{
                maxWidth: 512,
                mx: 'auto',
                px: 3,
                py: 4,
            }}
            columns={[2, null, 4]}>
            <ProfileBox type="stackoverflow" />
            <ProfileBox type="github" />
            <ProfileBox type="linkedin" />
            <ProfileBox type="twitter" />
        </Grid>
    </Container>)
}

export default ProfileContainer;

const PhotoProfileQuery = graphql`query PhotoProfileQuery {

    file(relativePath:{ eq: "myself/moi.JPG"}) {
    	childImageSharp {
        	fixed(width: 150) {
                ...GatsbyImageSharpFixed
        }
      }
  	}
}
`;