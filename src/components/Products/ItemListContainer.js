
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css";
import ItemDetailContainer from "./ItemDetailContainer";
import { Link } from 'react-router-dom'
const ItemListContainer = () => {
  const { data, cart, setCart } = useContext(dataContext);

  const ItemDetailContainer = (product) => {
    setCart([ product])
  }
  return data.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src= {product.img} alt ='img-product-card'/>
        <h3> {product.name} </h3>
        <h4> {product.price} $</h4>
        <Link onClick={() => ItemDetailContainer (product)}className="itemDetail" to={"/item"}>༼ つ ◕_◕ ༽つ</Link>
        <button>Comprar</button>
      </div>
    )
  }) 
}

export default ItemListContainer
