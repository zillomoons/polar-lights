import React, { useState } from 'react'
import SidebarContainer from '../../components/Sidebar/SidebarContainer'
import NavbarContainer from '../../components/Navbar/NavbarContainer'

const Home = () => {

    return (
        <>
            <NavbarContainer />
            <h1>Welcome to Polar Lights</h1>
            <SidebarContainer />
        </>
    )
}

export default Home
