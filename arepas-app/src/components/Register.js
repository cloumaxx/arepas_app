import React, { useState } from 'react';
import axios from 'axios';
import {  Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import logo from '../imagenes/arepagif.gif';
import './Menu.css'

export const Register = () => {

  const [fromData, setFormData] = useState({
    Email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    BirthofDate: "",
    RegisterDate: "",
    Address: "",
    PhoneNumber: ""
  });

  const handleFormSubmit = async (e) => {

    let response = await axios.post('http://localhost:3000/usuarios', fromData);

    if (response) {
      alert("dato enviado con exito");
    } else {
      alert("algo salio mal");
    }

    setFormData({
      Email: "",
      Password: "",
      FirstName: "",
      LastName: "",
      BirthofDate: "",
      RegisterDate: "",
      Address: "",
      PhoneNumber: ""
    });
  }

  return (
    <Container className='mt-3'>
      <h1 className='text-light letrica'>Registro</h1>
      <div className='pt-3'></div>
      <div className='border-bottom border border-white mx-auto'></div>
      <Form.Group className="form-group mb-3" controlId="formBasicEmail">

        <div className='d-flex justify-content-start text-light letrica'>
          <Form.Label>Correo Electronico</Form.Label>
        </div>
        <input placeholder='su correo' type="Email" class="form-control" id="exampleFormControlInput1" value={fromData.Email} onChange={(e) => setFormData({ ...fromData, Email: e.target.value })} />

        <div className='d-flex justify-content-start text-light letrica'>
          <Form.Label>contraseña</Form.Label>
        </div>
        <input placeholder='contraseña' type="Password" class="form-control" id="exampleFormControlInput1" value={fromData.Password} onChange={(e) => setFormData({ ...fromData, Password: e.target.value })} />

        <div className='d-flex justify-content-start text-light letrica'>
          <Form.Label>Nombre</Form.Label>
        </div>
        <input placeholder='su Nombre' type="name" class="form-control" id="exampleFormControlInput1" value={fromData.FirstName} onChange={(e) => setFormData({ ...fromData, FirstName: e.target.value })} />

        <div className='d-flex justify-content-start text-light letrica'>
          <Form.Label>Apellido</Form.Label>
        </div>
        <input placeholder='su Apellido' type="name" class="form-control" id="exampleFormControlInput1" value={fromData.LastName} onChange={(e) => setFormData({ ...fromData, LastName: e.target.value })} />

        <div className='d-flex justify-content-start text-light letrica'>
          <Form.Label>Fecha de Nacimiento</Form.Label>
        </div>
        <input placeholder='su fecha de nacimiento' type="date" class="form-control" id="exampleFormControlInput1" value={fromData.BirthofDate} onChange={(e) => setFormData({ ...fromData, BirthofDate: e.target.value })} />

        
        <div className='d-flex justify-content-start text-light letrica'>
          <Form.Label>Direcion</Form.Label>
        </div>
        <input placeholder='su direcion' type="Address" class="form-control" id="exampleFormControlInput1" value={fromData.Address} onChange={(e) => setFormData({ ...fromData, Address: e.target.value })} />

        <div className='d-flex justify-content-start text-light letrica'>
          <Form.Label>Telefono</Form.Label>
        </div>
        <input placeholder='su telefono' type="phone" class="form-control" id="exampleFormControlInput1" value={fromData.PhoneNumber} onChange={(e) => setFormData({ ...fromData, PhoneNumber: e.target.value })} />


        <div class="mb-3">
          <button className='btn btn-success' onClick={handleFormSubmit}>Registrate</button>
        </div>
        <img src={logo} className="img-fluid" alt='lol' />
      </Form.Group>
    </Container>
  )
}