import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Register = () => (
  <Form>
    {/* email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="ingrese su email" />
      </Form.Group>

      {/* contraseña */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>contraseña</Form.Label>
        <Form.Control type="password" placeholder="ingrese su contraseña" />
      </Form.Group>

      {/* primer nombre */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>primer nombre</Form.Label>
        <Form.Control type="text" placeholder="ingrese su primer nombre" />
      </Form.Group>

      {/* segundo nombre */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>segundo nombre</Form.Label>
        <Form.Control type="text" placeholder="ingrese su segundo nombre" />
      </Form.Group>
      
      {/* direcion */}
      <Form.Group className="mb-3" controlId="formBasicAdress">
        <Form.Label>direcion</Form.Label>
        <Form.Control type="text" placeholder="ingrese su direcion" />
      </Form.Group>

      {/* submit button */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
)