import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto" style={{fontSize:'18px',}}>
        <Nav.Link href="#home" style={{color:'white',}}>Home</Nav.Link>
        <Nav.Link href="#shop" style={{color:'white',}} >Shop</Nav.Link>
        <Nav.Link href="#Contact" style={{color:'white',}}>Shop</Nav.Link>
        <Nav.Link href="#Blog" style={{color:'white',}}>Blog</Nav.Link>
        <Nav.Link href="#faq" style={{color:'white',}}>FAQ</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;