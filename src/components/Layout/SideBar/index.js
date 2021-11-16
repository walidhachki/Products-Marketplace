import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SideBtnWrap,
    SidebarLink,
    SidebarRoute,
    SidebarLinkUp
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick = {toggle}>
            <Icon onClick={toggle}>
               <CloseIcon/> 
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ='home' onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to ='contactus' onClick={toggle}>Contact Us</SidebarLink>
                    <SidebarLink to ='Exclusive' onClick={toggle}>Exclusive</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/sign-up">Sign Up</SidebarRoute>
                </SideBtnWrap>
                <SideBtnWrap>
                    <SidebarRoute to="/sign-in">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
