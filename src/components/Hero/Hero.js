import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='heroBox'>
        <div className='greetingBox'>
            <h2 className='greetingText'><span className='clrAccent'>Hola</span> bienvenido a nuestro Pet Shop</h2>
            <button className='btn'>Comprar</button>
        </div>
    </section>
  )
}

export default Hero