import CartWidget from "../CartContent/CartWidget"
import { Link } from "react-router-dom";
import './NavBar.css'
import TotalItems from "../CartContent/TotalItems";
import { useContext } from 'react'
import { dataContext } from '../Context/DataContext'


const NavBar = () => {
const {cart} = useContext(dataContext);
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to ={"/"}>
      <h1 className="navbar-logo">CDShop.</h1>
      </Link>
      <Link className="seeCarrito" to ={"/cart"}>

      {cart.lenght > 0 ? <TotalItems/> : null }
      </Link>
      <CartWidget></ CartWidget>
      
      
      </nav>
      </div>
  );
};

export default NavBar