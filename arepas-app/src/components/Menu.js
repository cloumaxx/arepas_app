import axios from 'axios';
import { FontAwesomeIcon as Fas } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Button, Container, Table, Form } from 'react-bootstrap';
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

  // Update
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const openCloseModalUpdate = () => {
    setShowModalUpdate(!showModalUpdate);
  }

  const selectCurrentUser = (user, action) => {
    setCurrentUser(user);
    switch (action) {
      case "Edit":
        openCloseModalUpdate();
        break;
      case "Details":
        openCloseModalDetails();
        break;
      case "Delete":
        openCloseModalDelete();
        break;
      default:
        break;
    }
  }

  const putUser = async () => {
    await axios.put(baseUrl + "/" + currentUser.id, currentUser)
      .then(response => {
        var result = response.data;
        var updatedData = data;
        updatedData.map(usr => {
          if (usr.id === currentUser.id) {
            usr.Name = result.email;
            usr.Description = result.name;
            usr.Price = result.username;
            usr.Image = result.password;
          }
        });
        GetUsers();
        openCloseModalUpdate();
      }).catch(error => {
        console.log(error);
      })
  }

  // Details
  const [showModalDetails, setShowModalDetails] = useState(false);
  const openCloseModalDetails = () => {
    setShowModalDetails(!showModalDetails);
  }

  // Delete
  const [showModalDelete, setShowModalDelete] = useState(false);
  const openCloseModalDelete = () => {
    setShowModalDelete(!showModalDelete);
  }

  const deleteUser = async () => {
    await axios.delete(baseUrl + "/" + currentUser.id)
      .then(() => {
        setData(data.filter(usr => usr.id !== currentUser.id));
        openCloseModalDelete();
      }).catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    GetUsers();
  }, []);


  return (
    <Container className="text-center text-md-left text-light">
      <h1 className='letrica'>Arepas Venezolanas!!!</h1>
      <Table id="ArepasTable">
        <thead>
          <tr className='text-light letrica'>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map(usr => (
            <tr key={usr.id}>
              {/* <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="https://raw.githubusercontent.com/Jucer74/WebDevelopment/main/Proyecto/ImageProducts/Arepa-Con-Chorizo.jpg" className='img-thumbnail' alt="car" />
                  <div class="card-body">
                    <h5 class="card-title">{usr.Name}</h5>
                    <p class="card-text">{usr.Description}</p>
                    <p className='card-text'>{usr.Price}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div> */}
              <td className='letrica text-secondary'>{usr.Name}</td>
              <td className='letrica text-secondary'>{usr.Description}</td>
              <td className='letrica text-secondary'>{usr.Price}</td>
              <img src={`${usr.Image}`} className='col-md-4 img-thumbnail mt-3 mb-3' alt="car" />
              <td>
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
                <Button className="left" variant="outline-success" onClick={() => openCloseModalCreate()}> <Fas icon={faPlus} />Ordenar!!</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}