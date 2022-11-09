import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Button, Container, Table, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Menu.css'
import '../components/Menu.css'

export function Menu() {
  const baseUrl = "http://localhost:3000/arepas";
  const Orders = "http://localhost:3000/Orders";
  const OrdersDetails = "http://localhost:3000/OrderDetails";

  const [data, setData] = useState([]);

  const GetUsers = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const [currentUser, setCurrentUser] = useState({
    id: '',
    Name: '',
    Description: '',
    Price: '',
    Image: ''
  });

  // Create 
  const [showModalCreate, setShowModalCreate] = useState(false);
  const openCloseModalCreate = () => {
    setShowModalCreate(!showModalCreate);
  }

  const postUser = async () => {
    delete currentUser.id;
    await axios.post(Orders, currentUser)
      .then(response => {
        GetUsers();
        openCloseModalCreate();
      }).catch(error => {
        console.log(error);
      })
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setCurrentUser({
      ...currentUser,
      [name]: value
    })
  }

  useEffect(() => {
    GetUsers();
  }, []);


  return (
    <Container fluid>
      <h1 className='letrica text-white'>!!!Arepas!!!</h1>
      <div className='border-bottom border border-white mx-auto'></div>
      <div className='pt-3'></div>
      <NavDropdown title="Link" id="navbarScrollingDropdown" className='text-white'>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
      <Button variant="outline-success">Search</Button>
      <div className='pt-3'></div>
      </Form>
      <Row xs={3} md={4} className="g-4">
        {data.map(usr => (
          <Col>
            <Container>
              <Card>
                <Card.Img variant="top" src={`${usr.Image}`} className="img-thumbnail" />
                <Card.Body>
                  <Card.Title>{usr.Name}</Card.Title>
                  <Card.Text>
                    {usr.Description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Modal isOpen={showModalCreate}>
                  <ModalHeader>Brindanos tus Datos!!</ModalHeader>
                  <ModalBody>
                    <Form >
                      <Form.Group >
                        <Form.Label >Direcion:</Form.Label>
                        <Form.Control type="text" id="txtEmail" name="email" placeholder="username@domain.com" required onChange={handleChange} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" id="txtName" name="name" placeholder="Julio Robles" required onChange={handleChange} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Price:</Form.Label>
                        <Form.Control type="text" id="txtUsername" name="username" placeholder="username" required onChange={handleChange} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Image:</Form.Label>
                        <Form.Control type="password" id="txtPassword" name="password" onChange={handleChange} />
                      </Form.Group>
                    </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="primary" onClick={() => postUser()}>Llevlo a mi casa chamo!!</Button>
                    <Button variant="outline-info" onClick={() => openCloseModalCreate()}>Back</Button>
                  </ModalFooter>
                </Modal>
                <Button className="left" variant="outline-success" onClick={() => openCloseModalCreate()}>Ordenar por ${usr.Price}!!</Button>
                </Card.Footer>
              </Card>
            </Container>
          </Col>
        ))}
      </Row>
    </Container>
  );
}