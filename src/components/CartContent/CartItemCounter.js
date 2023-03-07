import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../Context/DataContext'
const CartItemCounter = ({product, quanty}) => {
  const { cart, setCart, buyProducts } = useContext(dataContext)
  
  const decrese =() => {
    const productrepeat = cart.find((item) => item.id === product.id)

    productrepeat.quanty !==1 && setCart(cart.map((item)=> (item.id === product.id ?{
      ...product, quanty : productrepeat.quanty - 1 } : item )))
  }
  return (
    <>
    <p className='counter-button' onClick={() => decrese(product)}>-</p>
    <p>{quanty}</p>
    <p className='counter-button' onClick={() => buyProducts(product)}>+</p>
    </>
  )
}
export default CartItemCounter 