import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <Link to="/" className="linkdeco">
              <h1 className="white">Shop-It</h1>
            </Link>
          </Navbar.Brand>

          {/* <Navbar.Brand href="#home">Shop-It</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/cart/:id" className="linkdeco">
                  <i className="fa-solid fa-cart-shopping"></i>
                  &nbsp;CART
                </Link>
              </Nav.Link>
              {userInfo ? (
                <NavDropdown
                  title={userInfo.name}
                  id="username"
                  style={{ marginLeft: "10px" }}
                >
                  <NavDropdown.Item>
                    <Link to="/profile">Profile</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link
                  to="/login"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "10px",
                    paddingTop: "12.2px",
                    float: "right",
                  }}
                >
                  <i className="fa-solid fa-user"></i> SIGN IN
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
