import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';
import logo from '../imagenes/arepa.png';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class NavigationBar extends Component {

  componentDidMount() {
    if (cookies.get('username')) {
      return true;
    }else{
      return false;
    }
  }

  render() {
    if (!cookies.get('username')) {
      return (
        <Navbar className='navbar border border-white ' >
          <img src={logo} className="App-logo" alt='lol' />
          <Navbar.Brand className='text-light letrica'>Arepa-app</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto' >
              <Nav.Item><Nav.Link className='text-light letrica' href="/"  >Menu</Nav.Link></Nav.Item>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Item ><Nav.Link className='text-light letrica' href="/Login">Login</Nav.Link></Nav.Item>
              <Nav.Item ><Nav.Link className='text-light letrica' href="./Register">Registrate</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar >
      );
    } if(cookies.get('username')) {
      return(
        <Navbar className='navbar border border-white ' >
        <img src={logo} className="App-logo" alt='lol' />
        <Navbar.Brand className='text-light letrica'>Arepa-app</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto' >
            <Nav.Item><Nav.Link className='text-light letrica' href="/"  >Menu</Nav.Link></Nav.Item>
          </Nav>
          <Nav className="ms-auto">

          </Nav>
        </Navbar.Collapse>
      </Navbar >
      );
    }

  }
}

export default NavigationBar;