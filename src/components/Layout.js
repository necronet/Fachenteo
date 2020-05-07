import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Flex, Grid, Container } from "theme-ui"

const Layout = ({ children }) => {
    return (<Container>
        <Header />
        <Grid columns = {[2, '6fr 1fr']}>
            <main>
                {children}
            </main>
            <aside>
                <Sidebar />
            </aside>
        </Grid>
    </Container>)
}

export default Layout;