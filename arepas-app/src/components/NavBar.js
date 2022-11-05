import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

export const NavigationBar = () => (
    <Navbar className='navbar' >
    <Navbar.Brand >Arepa-app</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">        
    <Nav className='me-auto'>
    <Nav.Item><Nav.Link href="/Menu" >Menu</Nav.Link></Nav.Item>
    </Nav>
      <Nav className="ms-auto">
        <Nav.Item><Nav.Link href="/Login" >Inicio de sesion</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/Register" >Registrate</Nav.Link></Nav.Item>
      </Nav>
    </Navbar.Collapse>        
  </Navbar>
);