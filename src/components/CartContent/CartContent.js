import CartElements from "./CartElements"
import { useContext } from 'react'
import { dataContext } from '../Context/DataContext'
import CartTotal from "./CartTotal"
import "./CartContent.css"
import NavBar from "../Navbar/NavBar"

const CartContent = () => {
const { cart } = useContext(dataContext)

return (
<>
<NavBar/>
{cart.length > 0 ? (
  <>
    <CartElements/>
    <CartTotal/>
</>
) : 
(<h2 className="cart-message-center"> El carrito esta vacio</h2>
)} 
</>
)
}

export default CartContent