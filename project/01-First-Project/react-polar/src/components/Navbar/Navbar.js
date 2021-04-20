import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';
import { NavbarData } from './navbarData';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    LogoImg,
    Bars,
    NavMenu,
    NavLinkR,
    NavBtnLink
} from './NavbarElements'

const Navbar = (props) => {

    const [sidebar, setSidebar] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const changeNav = () => {
        window.scrollY >= 80
            ? setScrollNav(true)
            : setScrollNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo exact to='/' ><LogoImg src={logo} alt='logo' /></NavLogo>
                    <Bars onClick={showSidebar} />
                    <NavMenu className={sidebar ? 'active' : ''}>
                        {NavbarData.map((item, index) => {
                            return (
                                <NavLinkR key={index} to={item.path} activeStyle onClick={showSidebar}>
                                    {item.title}
                                </NavLinkR>
                            )
                        })}
                        {props.isAuth
                            ? <NavBtnLink onClick={props.logOut}>Sign out</NavBtnLink>
                            : <NavBtnLink to={'/login'}>Sign in</NavBtnLink>
                        }
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;
