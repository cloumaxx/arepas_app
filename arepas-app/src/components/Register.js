import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from "react-multi-date-picker"

export const Register = () => {

  const [fromData, setFormData] = useState({
    Email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    BirthofDate: "",
    RegisterDate: "",
    Address: "",
    PhoneNumber: ""
  });

  const handleFormSubmit = async (e) => {

    let response = await axios.post('http://localhost:3000/usuarios', fromData);

    if (response) {
      alert("dato enviado con exito");
    } else {
      alert("algo salio mal");
    }

    setFormData({
      Email: "",
      Password: "",
      FirstName: "",
      LastName: "",
      BirthofDate: "",
      RegisterDate: "",
      Address: "",
      PhoneNumber: ""
    });
  }

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-7">
        <h1 className="row"> Register </h1>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input type="Email" class="form-control" id="exampleFormControlInput1" value={fromData.Email} onChange={(e) => setFormData({ ...fromData, Email: e.target.value })} />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Password</label>
        <input type="Password" class="form-control" id="exampleFormControlInput1" value={fromData.Password} onChange={(e) => setFormData({ ...fromData, Password: e.target.value })} />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">FirstName</label>
        <input type="name" class="form-control" id="exampleFormControlInput1" value={fromData.FirstName} onChange={(e) => setFormData({ ...fromData, FirstName: e.target.value })} />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">LastName</label>
        <input type="name" class="form-control" id="exampleFormControlInput1" value={fromData.LastName} onChange={(e) => setFormData({ ...fromData, LastName: e.target.value })} />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">BirthofDate</label>
        <input type="date" class="form-control" id="exampleFormControlInput1" value={fromData.BirthofDate} onChange={(e) => setFormData({ ...fromData, BirthofDate: e.target.value })} />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">RegisterDate</label>
        <input type="date" class="form-control" id="exampleFormControlInput1" value={fromData.RegisterDate} onChange={(e) => setFormData({ ...fromData, RegisterDate: e.target.value })} />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Address</label>
        <input type="Address" class="form-control" id="exampleFormControlInput1" value={fromData.Address} onChange={(e) => setFormData({ ...fromData, Address: e.target.value })} />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">PhoneNumber</label>
        <input type="phone" class="form-control" id="exampleFormControlInput1" value={fromData.PhoneNumber} onChange={(e) => setFormData({ ...fromData, PhoneNumber: e.target.value })} />
      </div>

      <div class="mb-3">
        <button className='btn btn-success' onClick={handleFormSubmit}>Registrate</button>
      </div>
    </div>
  </div>
  )
}