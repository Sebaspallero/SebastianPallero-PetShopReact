import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <ItemListContainer/>
    </div>
  );
}

export default App;