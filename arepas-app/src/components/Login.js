import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../imagenes/arepagif.gif';

export const Login = () => (
  <Container className='mt-3'>
    <h1 className='text-light letrica'>Inicio de sesion</h1>
    <div className='pt-3'></div>
    <div className='border-bottom border border-white mx-auto'></div>
    <Row>
      <Col>
        <Form>
          {/* email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className='d-flex justify-content-start text-light letrica'>
              <Form.Label>Email address</Form.Label>
            </div>
            <Form.Control type="email" placeholder="ingrese su email" />
          </Form.Group>

          {/* contraseña */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className='d-flex justify-content-start text-light letrica'>
              <Form.Label>Password</Form.Label>
            </div>
            <Form.Control type="password" placeholder="ingrese su contraseña" />
          </Form.Group>
          <Button variant="primary" type="submit" className='letrica'>
            Submit
          </Button>
        </Form>
      </Col>
      <Col xs={10}>
      <img src={logo} className="img-fluid" alt='lol'/>
      </Col>
    </Row>

  </Container>
)