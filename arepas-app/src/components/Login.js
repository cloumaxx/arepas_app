import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';

export const Login = () => (
  <Container className='mt-3'>
    <Row>
      <Col>
        <Form>
          {/* email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className='d-flex justify-content-start'>
              <Form.Label>Email address</Form.Label>
            </div>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          {/* contraseña */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className='d-flex justify-content-start'>
              <Form.Label>Password</Form.Label>
            </div>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Col xs={10}></Col>
    </Row>
  </Container>
)