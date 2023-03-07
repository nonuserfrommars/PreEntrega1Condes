
import { useContext } from "react"
import { dataContext } from "../Context/DataContext"
import "./Products.css"
import "../CartContent/CartContent.css"
import { Link } from 'react-router-dom'

const ItemListContainer = () => {
  const { data, cart, setCart } = useContext(dataContext);
  
  const buyProducts = (product) => {
    setCart([...cart, product])
    const productrepeat = cart.find((item) => item.id === product.id)

    if(productrepeat){
      setCart(cart.map((item) => (item.id === product.id ? {...product, quanty : productrepeat.quanty + 1 } : item )))
    }else {
      setCart ([...cart, product])
    }
  }
  const ItemDetailContainer = (product) => {
    setCart([ ...cart, product])
  }
  return data.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src= {product.img} alt ='img-product-card'/>
        <h3> {product.name} </h3>
        <h4> {product.price} $</h4>
        <Link onClick={() => ItemDetailContainer (product)}className="itemDetail" to={"/item"}>༼ つ ◕_◕ ༽つ</Link>
        <button onClick={()=> buyProducts(product)}>Comprar</button>
      </div>
    )
  }) 
}

export default ItemListContainer
