import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='spinnerBox'>
      <p className='spinnerText'>Espere un momento...</p>
      <img className='spinnerImg' src='/assets/spinner.gif' alt='Spinner'></img>
    </div>
  )
}

export default Spinner


