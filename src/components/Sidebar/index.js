import React from "react";
import { Button } from "../ButtonElement";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBtnWrap,
  SideBarWrapper,
  SideBarMenu,
  SideBarRoute,
} from "./SideBarElements";

export const SideBar = ({ isOpen, toggle }) => {
  
  return (
    <SideBarContainer isOpen={isOpen} onclick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="discover" onClick={toggle}>
            Discover
          </SideBarLink>
          <SideBarLink to="services" onClick={toggle}>
            Services
          </SideBarLink>
          <SideBarLink to="signup" onClick={toggle}>
            Sign Up
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signin" onClick={toggle}>
            Sign In
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
      </SideBarContainer>
  );
};

export default SideBar;
