import React, { Component, useEffect } from "react";
import Cookies from "universal-cookie";
import {useDispatch,useSelector} from 'react-redux';
import {log} from '../actions/actions'

const cookies = new Cookies();

function Carrito(){
    const dispatch = new useDispatch();
    useEffect(() => {
        dispatch(log());
      }, []);

    return (
        <h1>XD</h1>
    );
}

export default Carrito;