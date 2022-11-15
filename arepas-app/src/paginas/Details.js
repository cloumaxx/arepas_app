import axios from 'axios';
import React, { useEffect, useState ,Container} from "react";
import { useLocation } from 'react-router-dom'
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardFooter,
//   MDBCardHeader,
//   MDBCardImage,
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBTypography,
// } from "mdb-react-ui-kit";


export function Details(props) {

  const location = useLocation();
  const id = location.state?.Id;
  let baseUrl = `http://localhost:3000/arepas`

  const [ data, setData]=useState([]);  

  const GetUsers=async()=>{
    await axios.get(baseUrl)
    .then (response=>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    GetUsers();
  },[]);

  return (
    <Container className="text-center text-md-left">
      
          {data.map(usr=>(
            <tr key={usr.id}>
              <h1>xd</h1>
            </tr>
          ))}
    </Container>
  );
}