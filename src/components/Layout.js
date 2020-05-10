import React from 'react'
import Header from './Header'
import { Grid, Container } from "theme-ui"

const Layout = ({ children }) => {
    return (<Container>
            <Header />
            <main>
                {children}
            </main>
        </Container>)
}

export default Layout;