import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Button, Container, Form ,Card,Col} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import {imagesUrl,Orders} from '../conexiones/urls';
import Pagination from 'react-bootstrap/Pagination';
import {Link} from "react-router-dom";
import '../components/Menu.css'


export function Menu(props) {

  let header = fetch( props.baseUrl ).then( response => response.headers.get( "Link" ) ).then(function parseLinkHeader( linkHeader ) {
    const linkHeadersArray = linkHeader.split( ", " ).map( header => header.split( "; " ) );
    const linkHeadersMap = linkHeadersArray.map( header => {
       const thisHeaderRel = header[1].replace( /"/g, "" ).replace( "rel=", "" );
       const thisHeaderUrl = header[0].slice( 1, -1 );
       return [ thisHeaderRel, thisHeaderUrl ]
    } );
    return Object.fromEntries( linkHeadersMap );
 });



  let [data, setData] = useState([]);

  let GetUsers = () => {
     axios.get(props.baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  let [currentUser, setCurrentUser] = useState({
    id: '',
    Name: '',
    Description: '',
    Price: '',
    Image: ''
  });

  // Crear orden
  let [showModalCreate, setShowModalCreate] = useState(false);
  let openCloseModalCreate = () => {
    setShowModalCreate(!showModalCreate);
  }

  let postUser = async () => {
    delete currentUser.id;
    await axios.post(Orders, currentUser)
      .then(response => {
        GetUsers();
        openCloseModalCreate();
      }).catch(error => {
        console.log(error);
      })
  }

  let handleChange = e => {
    let { name, value } = e.target;
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
      <div className='pt-3'>
      <Navbar expand="lg" bg="dark" variant="dark" className='rounded'>
          <Container>
            <Navbar.Brand to="#">
              <NavDropdown title="Elije tu tipo de Arepa" id="navbarScrollingDropdown" className='text-white'>
                <NavDropdown.Item to="#action3">Sin carne</NavDropdown.Item>
                <NavDropdown.Item to="#action4">con carne</NavDropdown.Item>
                <NavDropdown.Item to="#action4">con queso</NavDropdown.Item>
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
      <Row xs={3} md={3} className="g-4">
        {data.map(usr => (
          <Col key={usr.id}>
            <Container >
              <Card >
              <Link to="/Details" state={{ Id: usr.id }}>
                <Card.Img variant="top" src={`${imagesUrl+usr.Image}`} className="img-thumbnail" />
                </Link>
                <Card.Body className='description'>
                  <Card.Title>{usr.Name}</Card.Title>
                  <Card.Text>
                    {usr.Historia}
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
      
      <Pagination>
      <Pagination.Prev/>
      <Pagination.Item 
      onClick={()=>
      {header.then(function(result) {
        console.log(result.first);
        console.log(result.next);
        console.log(result.last);
      })}}>"Ultimo"</Pagination.Item>
      <Pagination.Next />
    </Pagination>
    <FloatButton>
    <div class="menu pmd-floating-action"  role="navigation"> 
    <a class="pmd-floating-action-btn btn pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-primary" data-title="Add" href="javascript:void(0);"> 
		<span class="pmd-floating-hidden">Primary</span>
		<i class="material-icons pmd-sm">add</i> 
	</a> 

    </div>
    </FloatButton>
    
    </Container>
  );
}