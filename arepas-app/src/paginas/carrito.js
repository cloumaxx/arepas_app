import React, { Component, useEffect } from "react";
import Cookies from "universal-cookie";
import {useDispatch,useSelector} from 'react-redux';
import {log} from '../actions/actions'
import {shopitem} from '../actions/actions'

const cookies = new Cookies();

function Carrito(props){
    
    const dispatch = new useDispatch();

    let id = cookies.get('id');
    let Email = cookies.get('Email');
    let Password = cookies.get('Email');
    let FirstName = cookies.get('FirstName');
    let LastName = cookies.get('LastName');
    let BirthofDate = cookies.get('BirthofDate');
    let RegisterDate = cookies.get('RegisterDate');
    let Address = cookies.get('Address');
    let PhoneNumber = cookies.get('PhoneNumber');

    
    useEffect(() => {
        dispatch(log(id,Email,Password,FirstName,LastName,BirthofDate,RegisterDate,Address,PhoneNumber));
      }, []);

    return (
        <h1>XD</h1>
    );
}

export default Carrito;