
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavigationBar = () => (
    <Navbar bg="dark" variant="dark" >
    <Navbar.Brand href="/">Arepa-app</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">        
      <Nav className="ms-auto">
        <Nav.Item><Nav.Link href="/Login" >Inicio de sesion</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/Login" >Registrate</Nav.Link></Nav.Item>
      </Nav>
    </Navbar.Collapse>        
  </Navbar>
)