import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import '../css/Menu.css'
import {  Container } from 'react-bootstrap';


export function Orders() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  
  const [fromData, setFormData] = useState({
    DeliveryAddress: "",
    DeliveryPhoneNumber: "",
    DeliveryFirstName: "",
    DeliveryLastName: "",
    Notes: "",
  });

  const handleFormSubmit = async (e) => {

    let response = await axios.post('http://localhost:3000/Orders', fromData);

    if (response) {
      alert("dato enviado con exito");
      window.location.href = "/Login";
    } else {
      alert("algo salio mal");
    }

    setFormData({
      DeliveryAddress: "",
      DeliveryPhoneNumber: "",
      DeliveryFirstName: "",
      DeliveryLastName: "",
      Notes: "",
    });
  }


  return (
    
  <Container className='mt-9'>
    <h1 className='text-light letrica'>ingresa tus datos para realizar el pedido</h1>
        <Form.Group className="form-group mb-3" controlId="formBasicEmail">
    <p></p>
      <div className="center">
      <div className='justify-content-start text-light letrica'>
      <h4 className="center">Nombre</h4>
      </div>
      <input placeholder='su correo' type="name"  className="form-control-lg" id="ControlInputCorreo" value={fromData.DeliveryFirstName} onChange={(e) => setFormData({ ...fromData, DeliveryFirstName: e.target.value })} size={25} />
      <p></p>
      <div className='justify-content-start text-light letrica'>
      <h4 className="center">Apellido </h4>
      </div>
      <input placeholder='contraseña' type="name" className="form-control-lg" id="ControlInputContraseña" value={fromData.DeliveryLastName} onChange={(e) => setFormData({ ...fromData, DeliveryLastName: e.target.value })} size={25} />
      <p></p>
      <div className='justify-content-start text-light letrica'>
      <h4 className="center">Dirreccion</h4>
      </div>
      <input placeholder='Su Nombre' type="Address" className="form-control-lg" id="exampleFormControlInput1" value={fromData.DeliveryAddress} onChange={(e) => setFormData({ ...fromData, DeliveryAddress: e.target.value })} size={25} />
      <p></p>
      <div className='justify-content-start text-light letrica'>
      <h4 className="center">Numero</h4>
      </div>
      <input placeholder='Su Apellido' type="phone" className="form-control-lg" id="exampleFormControlInput1" value={fromData.DeliveryPhoneNumber} onChange={(e) => setFormData({ ...fromData, DeliveryPhoneNumber: e.target.value })} size={25} />
      <p></p>
      <div className='justify-content-start text-light letrica '>
      <h4 className="center">Notas</h4>
      </div>
      <input placeholder='Su Apellido' type="text" className="form-control-lg" id="exampleFormControlInput1" value={fromData.Notes} onChange={(e) => setFormData({ ...fromData, Notes: e.target.value })} size={25} />
      <p></p>
      </div>
      <div className="mb-3">
        <button className='btn btn-success' type="submit" href="/" onClick={handleFormSubmit}>ORDENAR!!!</button>
      </div>
    </Form.Group>
    </Container>
  );

};
