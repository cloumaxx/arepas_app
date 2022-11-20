import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../css/NavBar.css";
import logo from "../imagenes/arepa.png";
import Cookies from "universal-cookie";
import {useDispatch,useSelector} from 'react-redux';
import { log } from "../actions/actions";

const cookies = new Cookies();


class NavigationBar extends Component {
  cerrarSesion = () => {
    cookies.set("id", { path: "/" });
    cookies.remove("Email", { path: "/" });
    cookies.remove("Password", { path: "/" });
    cookies.remove("FirstName", { path: "/" });
    cookies.remove("LastName", { path: "/" });
    cookies.remove("BirthofDate", { path: "/" });
    cookies.remove("RegisterDate", { path: "/" });
    cookies.remove("Address", { path: "/" });
    cookies.set("log", false, { path: "/" });
    window.location.href = "/";
  };

  componentDidMount() {
    if (cookies.get("FirstName")) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log(cookies.get("log"));
    console.log(cookies.get("FirstName"));
    if (cookies.get("log") === "false") {
      return (
        <Navbar className="navbar border border-white ">
          <img src={logo} className="App-logo" alt="lol" />
          <Navbar.Brand className="text-light letrica">Arepa-app</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link className="text-light letrica" href="/">
                  Menu
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link className="text-light letrica" href="/Login">
                  Login
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-light letrica" href="./Register">
                  Registrate
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
    if (cookies.get("log") === "true") {
      return (
        <Navbar className="navbar border border-white ">
          <img src={logo} className="App-logo" alt="lol" />
          <Navbar.Brand className="text-light letrica">Arepa-app</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link className="text-light letrica" href="/">
                  Menu
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link
                  className="text-light letrica"
                  href="/Carrito"
                >
                  carrito de compras
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="text-light letrica"
                  href="/Register"
                  onClick={() => this.cerrarSesion()}
                >
                  Cerrar Sesión
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
}

export default NavigationBar;
