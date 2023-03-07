import NavBar from "../Navbar/NavBar";
import Banner from "../Banner/Banner";
import ItemListContainer from "../Products/ItemListContainer";
const Home = () =>{
  return(
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <div className= "product-card-container">
    <ItemListContainer></ItemListContainer>
    
    </div>
    </>
  );
};
export default Home;