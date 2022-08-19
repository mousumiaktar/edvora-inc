import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar style={{ background: '#131E51' }} collapseOnSelect expand="lg" fixed="top">
        <Container>
          <Navbar.Brand style={{color:'#fff'}} as={Link} to='/home'>Edvora-Inc</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
            <Nav className="ms-auto">
              <Nav.Link style={{color:'#fff'}} as={Link} to='/home'>Home</Nav.Link>
              <Nav.Link style={{color:'#fff'}} as={Link} to='/orders'>Orders</Nav.Link>
              <Nav.Link style={{color:'#fff'}} as={Link} to='/users'>Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;