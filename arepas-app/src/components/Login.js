import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../imagenes/arepagif.gif';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl = "http://localhost:3000/usuarios";
const cookies = new Cookies();

class Login extends Component {
  state = {
    form: {
      Email: '',
      Password: ''
    }
  }

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  iniciarSesion = async () => {
    await axios.get(baseUrl, { params: { Password: this.state.form.Email, Password: (this.state.form.Password) } })
      .then(response => {
        return response.data;
      })
      .then(response => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set('id', respuesta.id, { path: "/" });
          cookies.set('apellido_paterno', respuesta.apellido_paterno, { path: "/" });
          cookies.set('apellido_materno', respuesta.apellido_materno, { path: "/" });
          cookies.set('nombre', respuesta.nombre, { path: "/" });
          cookies.set('username', respuesta.username, { path: "/" });
          alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
          window.location.href = "./menu";
        } else {
          alert('El usuario o la contraseña no son correctos');
        }
      })
      .catch(error => {
        console.log(error);
      })

  }

  componentDidMount() {
    if (cookies.get('username')) {
      window.location.href = "./menu";
    }
  }


  render() {
    return (
      <Container className='mt-3'>
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="Email"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="Password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
    </Container>  
    );
  }
}

export default Login;