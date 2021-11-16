import React from 'react'
import { NavLink } from "react-router-dom";
import {FaBars} from 'react-icons/fa'
import Login from "../login/login";
import SignUp from "../Sign/signup";
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavLinksUp
} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                <img src="images/logo.png" class="image" alt="" />
                </NavLogo>
                <MobileIcon >
                   <FaBars onClick = {toggle}/> 
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to ='home'>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ='/Contact'>Contact Us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ='exclusive'>Exclusive</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                        <NavLinksUp to ='/sign-up'>Sign Up</NavLinksUp>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to = '/sign-in'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
    )
}

export default Navbar;
