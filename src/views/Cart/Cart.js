import React from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../Context/CartContext'

const Cart = () => {

  const {cart} = useCartContext();
  console.log('Página de Carrito', cart)


  return (
    <div className='cartBox'>
        <h1 className='titleSection'>Carrito de <span className='titleAccent'>Compras</span></h1>
        {cart.map((product)=>{
            return(
                <div className='cartProducts'>
                  <div className='cartProduct' key={product.id}>
                    <img className='cartImg' src={product.img_url} alt={product.title}></img>
                    <p className='cartText'>{product.title}</p>
                    <p className='cartText'>X {product.quantity}</p>
                    <span className='cartDeleteBtn'><FontAwesomeIcon icon={faXmark} /></span>
                  </div>
                </div>
                )})}
    </div>
  )
}

export default Cart