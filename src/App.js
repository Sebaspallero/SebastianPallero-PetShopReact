import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//COMPONENTS
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer';

//CONTEXT
import CartProvider from './Context/CartContext';


//VIEWS
import Home from './views/Home/Home';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';
import Cart from './views/Cart/Cart';



const App = () => {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <NavBar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/categoria/:category' element={<Home/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </CartProvider>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
