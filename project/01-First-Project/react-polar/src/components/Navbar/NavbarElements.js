import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;

`
export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
`

export const LogoImg = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        z-index: 999;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        background: #0d0d0d;
        margin: 0;
        position: fixed;
        z-index: 500;
        width: 100%;
        height: 100vh;
        top: 0;
        right: -100%;
        transition: 850ms;
        padding-top: 80px;

        &.active{
            right: 0;
            transition: 350ms;
            margin: 0 auto;

        }
    }
`

export const NavLinkR = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active,
    :hover{
        color: #02acc5;
    }

    @media screen and (max-width: 768px){
        padding: 20px;
        height: 80px;
    }
`
export const NavBtnLink = styled(Link)`
   border-radius: 50px;
   background: #01bf71;
   white-space: nowrap;
   padding: 10px 22px;
   color: #010606;
   font-size: 16px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;

   &:hover{
       transition: all 0.2s ease-in-out;
       background: #fff;
   }
   @media screen and (max-width: 768px){
        margin: 20px;
       
    }
   
`