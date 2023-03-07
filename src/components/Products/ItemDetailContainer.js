import React from 'react'
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import NavBar from '../Navbar/NavBar';
const ItemDetailContainer = () => {
  const { data } = useContext(dataContext);
  return data.map((product) => {
    return (<>
      <NavBar/>
      <div className="itemDetail" key={product.id}>
      
        <img src= {product.img} alt ='img-detail-card'/>
        <h2 className='detalles'>{product.detalles}</h2>
        <h3 className='name'> {product.name} </h3>
        <h4 className='precio'> {product.price} $</h4>
      </div></>
    )
  }) 
}

export default ItemDetailContainer