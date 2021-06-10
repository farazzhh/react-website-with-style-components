import React,{ useState } from "react";
import {FaBars } from 'react-icons/fa'
import { Button } from "../ButtonElement";
import {Nav , NavbarContainer , NavLogo ,MobileIcon , NavLinks , NavMenu , NavItem , NavBtn , NavBtnLinks} from './NavbarElements' 
const Navbar = ({toggle}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }
    return (
      <>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">Company</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover">Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="signup">Sign Up</NavLinks>
              </NavItem>
            </NavMenu>
                    <NavBtn>
                        <Button to="/signin"  onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'  >Sign In</Button>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </>
    );
};

export default Navbar;
