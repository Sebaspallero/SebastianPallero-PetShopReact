import React from 'react'
import './Contact.css'

const Contact = () => {

  const handleSubmit=(e)=> {
    e.preventDefault();
    alert('Mensaje Enviado');
  }
  
  return (
    <div className='contactBox'>
        <div>
            <img src='/assets/contact.png' alt='Imagen Contacto' className='contactImg'></img>
        </div>
        <div className='contactFormBox'>
            <h2 className='titleSectionAbout'>Contacto{/*  <span className='titleAccent'>Nosotros</span> */}</h2>
            <form className='contactForm' onSubmit={handleSubmit}>
                <input type='text' placeholder='Su Nombre' className='formInput'></input>
                <input type='email' placeholder='Su E-mail' className='formInput'></input>
                <textarea type='text' placeholder='Su Mensaje' className='formInput' rows="5"></textarea>
                <button className='btn'>Enviar Mensaje</button>
            </form>
        </div>
    </div>
  )
}

export default Contact