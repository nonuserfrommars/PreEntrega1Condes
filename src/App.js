
import Home from './src/components/Home/home';
import CartContent from './components/CartContent/CartContent';
import DataProvider from './components/Context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Products/ItemDetailContainer';
function App() {
  return (
    <DataProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>} /> 
      <Route path="/cart" element={<CartContent />}/>
      <Route path="/item" element ={<ItemDetailContainer></ItemDetailContainer>} />
      
    </Routes> 
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;