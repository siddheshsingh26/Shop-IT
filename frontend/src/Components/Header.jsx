import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <>
    <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
        <Container >
          
          
          <Navbar.Brand >
          <Link to="/" className='linkdeco'>
            <h1 className='white'>Shop-It</h1></Link></Navbar.Brand>
          
          
          {/* <Navbar.Brand href="#home">Shop-It</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link >
              <Link to="/cart" className='linkdeco'><i className="fa-solid fa-cart-shopping"></i>
            &nbsp;CART</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/singin" className='linkdeco'><i className="fa-solid fa-user"></i>
               &nbsp; SINGIN</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  )
}

export default Header