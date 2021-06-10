import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SideBarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items:center;
top : 0px ;
left: 0px ;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%') };
`;


export const CloseIcon = styled(FaTimes)`
color:#fff;
&:hover{
  color:hotpink;
}
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-sixe: 2rem;
cursor: pointer;
outline:none;
`

export const SideBarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5,80px );
align-items:center;
text-align: center;
@media and screen (max-width: 480px){
  grid-template-rows: repeat(5,60px);
}

justify-content: center;
`
export const SideBarWrapper = styled.div`
color: #fff;

`

export const SideBarLink = styled(LinkS)`
displat:flex;
align-items: center;
justify-content:center;
font-size:1.5rem;
text-decoretion: none;
transition: 0.2s ease-in-out;
list-style: none;
color: #fff;
cursor: pointer;

&:hover {
 color:hotpink;
 transition: 0.2s ease-in-out;   
}
`


export const SideBtnWrap = styled.div`
display:flex;
justify-content: center;

`

export const SideBarRoute = styled(LinkR)`
border-radius: 50px;
background: hotpink;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: one;
border: none;
cursor: pointer;
transition: all 0.2s eaise-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`