import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { NavbarData } from './navbarData';
import {
    Nav,
    NavLogo,
    LogoImg,
    Bars,
    NavMenu,
    NavLinkR,
    NavBtnLink
} from './NavbarElements'

const Navbar = (props) => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <Nav>
                <NavLogo exact to='/' ><LogoImg src={logo} alt='logo' /></NavLogo>
                <Bars onClick={showSidebar} />
                <NavMenu className={sidebar ? 'active' : ''}>
                    {NavbarData.map((item, index) => {
                        return (
                            <NavLinkR key={index} to={item.path} activeStyle={{ color: '#02acc5' }}>
                                {item.title}
                            </NavLinkR>
                        )
                    })}
                    {props.isAuth
                        ? <NavBtnLink onClick={props.logOut}>Sign out</NavBtnLink>
                        : <NavBtnLink to={'/login'}>Sign in</NavBtnLink>
                    }
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;
