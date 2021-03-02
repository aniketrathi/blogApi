import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
} from "reactstrap";
import React, { useState, useContext } from "react";

import AuthContext from "../../context/auth-context";
import Logout from "../auth/logout/logout";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { loggedIn } = useContext(AuthContext);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <h3>Blogs</h3>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            {loggedIn === false && (
              <>
                <NavItem>
                  <NavLink href="/register">Register</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
        {loggedIn === true && (
          <>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Logout />
              </NavItem>
            </Nav>
          </>
        )}
      </Navbar>
    </div>
  );
};

export default Header;
