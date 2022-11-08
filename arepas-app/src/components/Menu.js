import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Button, Container, Table, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css'

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
      <h1 className='letrica text-white'>Arepas Venezolanas!!!</h1>
      <div className='pb-3'>
        <Navbar expand="lg" bg="dark" variant="dark" className='rounded'>
          <Container>
            <Navbar.Brand href="#">
              <NavDropdown title="Elije tu tipo de Arepa" id="navbarScrollingDropdown" className='text-white'>
                <NavDropdown.Item href="#action3">Sin carne</NavDropdown.Item>
                <NavDropdown.Item href="#action4">con carne</NavDropdown.Item>
                <NavDropdown.Item href="#action4">con queso</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Brand>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Container>
        </Navbar>
      </div>

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
                          <Form.Control type="text" id="txtEmail" name="email" placeholder="su direcion" required onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Nombre de quien lo recibe:</Form.Label>
                          <Form.Control type="text" id="txtName" name="name" placeholder="su nombre" required onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Cantidad:</Form.Label>
                          <Form.Control type="number" id="txtUsername" name="username" placeholder="Cantidades exactas" required onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Datos extra c:</Form.Label>
                          <Form.Control type="text" id="Description" name="password" onChange={handleChange} />
                        </Form.Group>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button variant="primary" onClick={() => postUser()}>Llevalo a mi casa chamo!!</Button>
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