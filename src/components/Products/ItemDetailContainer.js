import React from 'react'
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const ItemDetailContainer = () => {
  const { data, product } = useContext(dataContext);
  return data.map((product) => {
    return (
      <div className="itemDetail" key={product.id}>
        <img src= {product.img} alt ='img-detail-card'/>
        <h2 className='detalles'></h2>
        <h3 className='name'> {product.name} </h3>
        <h4 className='precio'> {product.price} $</h4>
        
      </div>
    )
  }) 
}

export default ItemDetailContainer