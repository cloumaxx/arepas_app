import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';
import logo from '../imagenes/arepa.png';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class NavigationBar extends Component {

  cerrarSesion = () => {
    cookies.remove('id', { path: "/" });
    cookies.remove('apellido_paterno', { path: "/" });
    cookies.remove('apellido_materno', { path: "/" });
    cookies.remove('nombre', { path: "/" });
    cookies.remove('username', { path: "/" });
    window.location.href = '/';
  }

  componentDidMount() {
    if (cookies.get('username')) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    if (!cookies.get('username')) {
      return (
        <Navbar className='navbar border border-white ' >
          <img src={logo} className="App-logo" alt='lol' />
          <Navbar.Brand className='text-light letrica'>P&A</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto' >
              <Nav.Item><Nav.Link className='text-light letrica' href="/"  >Menu</Nav.Link></Nav.Item>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Item ><Nav.Link className='text-light letrica' href="/Login">Login</Nav.Link></Nav.Item>
              <Nav.Item ><Nav.Link className='text-light letrica' href="./Register">Registrate</Nav.Link></Nav.Item>
              <Nav.Item ><Nav.Link className='text-light letrica'href="./OrderCart">carro de compra</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar >
      );
    } if (cookies.get('username')) {
      return (
        <Navbar className='navbar border border-white ' >
          <img src={logo} className="App-logo" alt='lol' />
          <Navbar.Brand className='text-light letrica'>Arepa-app</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto' >
              <Nav.Item><Nav.Link className='text-light letrica' href="/">Menu</Nav.Link></Nav.Item>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Item ><Nav.Link className='text-light letrica' href="./Register" onClick={() => this.cerrarSesion()}>Cerrar Sesión</Nav.Link></Nav.Item>
              <Nav.Item ><Nav.Link className='text-light letrica'href="./OrderCart">carro de compra</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar >
      );
    }

  }
}

export default NavigationBar;