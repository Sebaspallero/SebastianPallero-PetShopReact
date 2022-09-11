import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='aboutBox'>
        <div className='aboutImg'><img src='/assets/about.png' alt='imagen sobre nosotros'></img></div>
        <div className='aboutInfoBox'>
            <h2 className='titleSectionAbout'>Sobre <span className='titleAccent'>Nosotros</span></h2>
            <p className='infoSection'>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Voluptatum Sint, Dolore Perspiciatis Iure Consequuntur Eligendi Quaerat Vitae Shaikh Anas.</p>
            <button className='btn'>Conocer Más</button>
        </div>
    </div>
  )
}

export default About