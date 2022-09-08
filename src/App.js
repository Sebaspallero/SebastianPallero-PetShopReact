import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//COMPONENTS
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer';

//VIEWS
import Home from './views/Home/Home';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
