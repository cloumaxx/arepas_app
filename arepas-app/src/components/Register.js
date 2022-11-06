import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

export const Register = () => (
  <Container className="d-flex justify-content-start mt-3">
  <Form>
    {/* email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <div className='d-flex justify-content-start'>
        <Form.Label>Email</Form.Label>
      </div>
        <Form.Control type="email" placeholder="ingrese su email" />
      </Form.Group>

      {/* contraseña */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <div className='d-flex justify-content-start'>
        <Form.Label>contraseña</Form.Label>
      </div>
        <Form.Control type="password" placeholder="ingrese su contraseña" />
      </Form.Group>

      {/* primer nombre */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <div className='d-flex justify-content-start'>
        <Form.Label>primer nombre</Form.Label>
        </div>
        <Form.Control type="text" placeholder="ingrese su primer nombre" />
      </Form.Group>

      {/* segundo nombre */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <div className='d-flex justify-content-start'>
        <Form.Label>segundo nombre</Form.Label>
        </div>
        <Form.Control type="text" placeholder="ingrese su segundo nombre" />
      </Form.Group>
      
      {/* direcion */}
      <Form.Group className="mb-3" controlId="formBasicAdress">
      <div className='d-flex justify-content-start'>
        <Form.Label>direcion</Form.Label>
        </div>
        <Form.Control type="text" placeholder="ingrese su direcion" />
      </Form.Group>

      {/* submit button */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
)