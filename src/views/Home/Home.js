import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.js';
import Hero from '../../components/Hero/Hero';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';

const Home = () => {
  return (
    <div>
        <Hero/>
        <ItemListContainer/>
    </div>
  )
}

export default Home