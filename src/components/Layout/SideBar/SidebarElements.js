import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
   position: fixed;
   z-index: 999;
   width: 50%;
   
   height: 100%;
   background: #e4f0fe;
   display: grid;
   align-items: center;
   top: 0;
   right:0;
   transition: 0.3s ease-in-out;
   opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
   top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
  color : #010606;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
   display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 70px);
  text-align: center;
  color : #010606;

  

  @media screen and (max-width: 480px) {
    grid-template-row: repeat(5, 60px); 
  }
`

export const SidebarLink = styled(LinkR)`
   display: flex;
   font-weight: bold;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  color : #010606;

  &:hover{
    color: #009eff;
    transition: 0.2s ease-in-out;
  }
`
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  
`
export const SidebarRoute = styled(LinkR)`
   border-radius: 5px;
   border-color: #000;
   border-style: solid;
  white-space: nowrap;
  padding: 16px 50px;
  color: #000;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  font-weight: bold;

  &:hover{
    color: #fff;
    border-color: #009eff;
    background: #009eff;
    transition: all 0.2s ease-in-out;
  }

`


