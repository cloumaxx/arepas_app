import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';
import logo from '../imagenes/arepa.png';
import Button from 'react-bootstrap/Button';

export const NavigationBar = () => (
    <Navbar className='navbar' >
    <img src={logo} className="App-logo" alt='lol'/>
    <Navbar.Brand >Arepa-app</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">        
    <Nav className='me-auto'>
    <Nav.Item><Nav.Link href="/Menu" >Menu</Nav.Link></Nav.Item>
    </Nav>
      <Nav className="ms-auto">
      <Nav.Item ><Button variant="outline-success">Registrate</Button></Nav.Item>
        <Nav.Item ><Button variant="outline-warning">Registrate</Button></Nav.Item>
      </Nav>
    </Navbar.Collapse>        
  </Navbar>
);