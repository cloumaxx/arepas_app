import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';
import logo from '../imagenes/arepa.png';

export const NavigationBar = () => (
    <Navbar className='navbar border border-white ' >
    <img src={logo} className="App-logo" alt='lol'/>
    <Navbar.Brand className='text-light letrica'>Arepa-app</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">        
    <Nav className='me-auto' >
    <Nav.Item><Nav.Link className='text-light letrica' href="/"  >Menu</Nav.Link></Nav.Item>
    </Nav>
      <Nav className="ms-auto">
      <Nav.Item ><Nav.Link className='text-light letrica' href="/Login">Login</Nav.Link></Nav.Item>
      <Nav.Item ><Nav.Link className='text-light letrica'href="./Register">Registrate</Nav.Link></Nav.Item>
      </Nav>
    </Navbar.Collapse>        
  </Navbar >
);