import React from 'react'
import { Grid, Container } from 'theme-ui'
import ProfileBox from './ProfileBox'

const ProfileContainer = () => {
    return (<Container p = {4}>
                As a software developer I've worked with multiple companies accross the world from Booking.com in the netherlands
                all the way to many companies in the bay area including Stubhub, Ebay, and Paypal Inc. I've always enjoy learning and toying 
                around with new paradigm, platforms, frameworks and tools. This site is intended to be yet another learning experience with building
                a relative quick static website with GatsbyJS and other React oriented tools. You can read more about how at the under the hood section.

                <div>You can look at open work at:</div>
                <Grid
                    sx={{
                        maxWidth: 512,
                        mx: 'auto',
                        px: 3,
                        py: 4,
                      }}
                    columns={[ 2, null, 4 ]}>
                        <ProfileBox type="stackoverflow"/>
                        <ProfileBox type="github"/>
                        <ProfileBox type="linkedin"/>
                        <ProfileBox type="twitter"/>
                    </Grid>
            </Container>)
}

export default ProfileContainer;