import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='aboutBox'>
        <div><img className='aboutImg' src='/assets/about.png' alt='imagen sobre nosotros'></img></div>
        <div className='aboutInfoBox'>
            <h2 className='titleSectionAbout'>Sobre <span className='titleAccent'>Nosotros</span></h2>
            <p className='infoSection'>Patitas es un servicio de comida para mascotas premium. Nuestros productos se basan en ofrecer alimentos organicos y libres de conservantes al mejor precio posible para nuestros clientes.</p>
            <a href='https://github.com/Sebaspallero' target="_blank" rel="noreferrer"  className='btn'>Conocer Más</a>
        </div>
    </div>
  )
}

export default About