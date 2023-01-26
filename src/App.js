import CartWidget from './components/CartWidget';
import Home from './components/home/home';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>} 
      /> 
      <Route path="/CD's" element={<ItemListContainer/>}/>
      <Route path="/cart" element={<CartWidget />}
      />    
    </Routes>
    </BrowserRouter>
  );
}

export default App;