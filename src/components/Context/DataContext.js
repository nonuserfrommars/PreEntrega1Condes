import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({children}) => {
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])

  const buyProducts = (product) => {
    setCart([...cart, product])
    const productrepeat = cart.find((item) => item.id === product.id)

    if(productrepeat){
      setCart(cart.map((item) => (item.id === product.id ? {...product, quanty : productrepeat.quanty + 1 } : item )))
    }else {
      setCart ([...cart, product])
    }
  }

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data))
  }, [])
  return <dataContext.Provider value={{ data, cart, setCart, buyProducts}}>{children}</dataContext.Provider>
};

export default DataProvider;
