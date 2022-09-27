import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='heroBox'>
        <div className='greetingBox'>
            <h2 className='greetingText'><span className='clrAccent'>Hola</span> bienvenido a nuestro Pet Shop</h2>
            <a href='#productos' className='btn'>Comprar</a>
        </div>
        <img src='/assets/waves.svg' className='wavesHero'></img>
    </section>
  )
}

export default Hero

