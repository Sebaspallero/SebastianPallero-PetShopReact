import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.js';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About.js';
import Contact from '../../components/Contact/Contact.js';




const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <ItemListContainer/>
        <Contact/>
    </div>
  )
}

export default Home