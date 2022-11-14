import React,{useEffect, useState} from "react";
import axios from "axios";

const OrderCart = () =>{

    const[items,setItems]=useState([]);
    const[total,setTotal] = useState();

    useEffect(()=>{
        loadItems();
    },[]);

    var totalPrice = 0;

    const loadItems =async ()=>{
        const result = await axios.get("http://localhost:3000/orderitem");
        setItems(result.data);
        result.data.map((Price)=>{
            totalPrice+= Price.qty * Number(Price.Price.replace("$",""))
            
        });
        setTotal(totalPrice/2);
    };

    const deleteOrder = async (id) =>{

        await axios.delete("http://localhost:3000/orderitem/"+id).then((res)=> alert("se borro con exito veneco !!!"));
    };


    return(
        <>
            <div className="order-area">
                <div className="order-total text-light letrica"> tu orden </div>
            </div>

            {items.map((item,index)=>(

            <div className="order-card" key={index}>
                <div className="order-item text-light letrica" > <img src={`${item.Image}`} width="160" height="120"></img> </div>
                <div className="order-item text-light letrica"> {item.Name} </div>
                <div className="order-item text-light letrica"> Cantidad de productos = {item.qty} </div>

                <div className="order-price text-light letrica"> 
                    $ {(item.qty * Number(item.Price.replace("$","")))}
                </div>
                <button className="btn-danger" onClick={() => deleteOrder(item.id)}>Eliminar</button>
            </div>
            ))}
            <div className="order-total">
                <div className="total text-light letrica">total orden chamo!!!</div>
                <div className="total-price text-light letrica"> $ {total}</div>

            </div>

        </>
    );
};

export default OrderCart;

