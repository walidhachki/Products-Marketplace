import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`

  background: #101522;
  height: 70px;
  /*margin-top: -80px;*/
  display: flex;
  jystify-content: center;
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
  max-width: 1100px; 
`

export const NavLogo = styled(LinkR)`
  
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  

  @media screen and (max-width: 960px) {
    width: 20%;
  }
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1300px){
     display: block;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 60%);
     font-size: 1.8rem;
     cursor: pointer; 
     color: #fff;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 300px;

  @media screen and (max-width: 1000px){
      display:none;
  }
`

export const NavItem = styled.li`
  height: 80px;
  &.active{
    border-bottom: 3px solid #01bf71;
}
  
`
export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;

  &:hover{
      color: #009eff;
      border-bottom: 2px solid #009eff;
  }
`
export const NavBtn = styled.nav`
   display: flex;
   align-items: center;
   position: relative;
  left: 200px;

   @media screen and (max-width: 1300px){
       display: none;
   }
`
export const NavBtnLink = styled(LinkR)`
border-radius: 5px;
border-color: #009eff;
border-style: solid;
white-space: nowrap;
padding: 8px 30px;
color: #009eff;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-weight: bold;

&:hover{
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
}
`
export const NavLinksUp = styled(LinkR)`
border-radius: 5px;
background: #009eff;
border-style: solid;
border-color: #009eff;
white-space: nowrap;
padding: 8px 30px;
color: #fff;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-weight: bold;

&:hover{
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
}
`
