import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Register.css';
import axios from 'axios';


 const Register = () => {

    const [fromData,setFormData] = useState({
        nombre:"",
        apellido:"",
        username:"",
        password:"",
    });

    const handleFormSubmit = async(e)=>{
        
        let response = await axios.post('http://localhost:3001/usuarios', fromData);

        if (response){
            alert("dato enviado con exito");
        }else{
            alert("algo salio mal");
        }
         
        setFormData({
            nombre:"",
            apellido:"",
            username:"",
            password:"",
        });
    }

    return(
    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <h1 className="row"> Register </h1>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">nombre</label>
                <input type="nombre" class="form-control" id="exampleFormControlInput1"  value={fromData.nombre} onChange={(e)=> setFormData({... fromData, nombre: e.target.value})} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">apellido</label>
                <input type="apellido" class="form-control" id="exampleFormControlInput1"  value={fromData.apellido} onChange={(e)=> setFormData({... fromData, apellido: e.target.value})} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="username" class="form-control" id="exampleFormControlInput1" value={fromData.username} onChange={(e)=> setFormData({... fromData, username: e.target.value})}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">password</label>
                <input type="password" class="form-control" id="exampleFormControlInput1"  value={fromData.password} onChange={(e)=> setFormData({... fromData, password: e.target.value})} />
            </div>
            <div class="mb-3">
                <button className='btn btn-success' onClick={handleFormSubmit}>Registrate</button>
            </div>
        </div>
    </div>
    )
}


export default Register
