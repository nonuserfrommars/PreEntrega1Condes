import CartWidget from "../CartWidget"
import { Link } from "react-router-dom";
import './NavBar.css'
import ItemListContainer from "../ItemListContainer";
const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
      <h1 className="navbar-logo">CDShop.</h1>
      <h2 className="item-list-container">
        <ItemListContainer 
        itemuno="CD's"
        itemdos="Categorias"
        itemtres="Vinilos"
        itemcuatro="Reproductores">
          </ItemListContainer>
      </h2>
      <CartWidget></ CartWidget>
      </nav>
      </div>
  );
};

export default NavBar