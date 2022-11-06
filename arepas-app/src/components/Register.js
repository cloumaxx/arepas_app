import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../imagenes/arepagif.gif';
import './Menu.css'

export const Register = () => (
  <Container className='mt-3'>
    <h1 className='text-light letrica'>Registro</h1>
    <div className='pt-3'></div>
    <div className='border-bottom border border-white mx-auto'></div>
    <Row>
      <Col>
        <Form>
          {/* email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className='d-flex justify-content-start text-light letrica'>
              <Form.Label>Email</Form.Label>
            </div>
            <Form.Control type="email" placeholder="ingrese su email" />
          </Form.Group>

          {/* contraseña */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className='d-flex justify-content-start text-light letrica'>
              <Form.Label>contraseña</Form.Label>
            </div>
            <Form.Control type="password" placeholder="ingrese su contraseña" />
          </Form.Group>

          <Row>
            {/* nombre */}
            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
              <div className='d-flex justify-content-start text-light letrica'>
                <Form.Label>primer nombre</Form.Label>
              </div>
              <Form.Control type="text" placeholder="ingrese su primer nombre" />
            </Form.Group>

            {/* apellido */}
            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
              <div className='d-flex justify-content-start text-light letrica'>
                <Form.Label>apellido</Form.Label>
              </div>
              <Form.Control type="text" placeholder="ingrese su segundo apellido" />
            </Form.Group>
          </Row>

          {/* direcion */}
          <Form.Group className="mb-3" controlId="formBasicAdress">
            <div className='d-flex justify-content-start text-light letrica'>
              <Form.Label>direcion</Form.Label>
            </div>
            <Form.Control type="text" placeholder="ingrese su direcion" />
          </Form.Group>

          {/* submit button */}
          <Button variant="primary" type="submit" className='letrica'>
            Submit
          </Button>
        </Form>
      </Col>
      <Col xs={7}>
      <img src={logo} className="img-fluid" alt='lol'/>
      </Col>
    </Row>
  </Container>
)