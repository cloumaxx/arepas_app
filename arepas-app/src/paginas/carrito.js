import React, { Component, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { log } from "../actions/actions";
import { shopitem } from "../actions/actions";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Container, Form, Card, Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { imagesUrl } from "../conexiones/urls";
import "../App.css";

const cookies = new Cookies();

function Carrito(props) {
  const dispatch = new useDispatch();
  
  let xd = useSelector((state) => state.car.fetchedSpendings);

  const [myArray, updateMyArray] = useState([]);

  const GetItem = async (id) => {
    await axios
      .get(`http://localhost:3000/arepas?id=${id}`)
      .then((response) => {
        updateMyArray((arr) => [...arr, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
     
  useEffect(() => {
    console.log("Arreglo  = "+ xd.length);
    for (let i = 0; i < xd.length; i++) {
      GetItem(xd[i]);
    console.log("Valor de i = "+ i );
    }
  }, []);
    
  if (xd.length > 0) {
    console.log(myArray);
    return (
      <Row xs={3} md={3} className="g-4">
        {myArray.map((item) => (
          <Col key={item.id} >
            <Container className="Carrito">
              <Card>
              <Card.Img
                    variant="top"
                    src={`${imagesUrl + item.Image}`}
                    className="img-thumbnail"
                  />
                <Card.Body>
                  <Card.Title>{item.Name}</Card.Title>
                  <Card.Text>{item.Description}</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        ))}
      </Row>
    );
  } else if (xd.length === 0) {
    return <h1 className="letrica text-white">carrito vacio</h1>;
  }
}

export default Carrito;
