import React from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../Context/CartContext'
import CheckOut from '../../components/CheckOut/CheckOut'
import { Link } from 'react-router-dom'

const Cart = () => {

  const {cart,removeProduct} = useCartContext();

  return (
    <div className='cartBox'>
        <h1 className='titleSection'>Carrito de <span className='titleAccent'>Compras</span></h1>
        {cart.length > 0 ? 
        <div className='cartFormFlex'>
          <div className='cartProductsBox'>
            {cart.map((product)=>{
              return(
                  <div className='cartProducts' key={product.id}>
                    <div className='cartProduct'>
                      <img className='cartImg' src={product.img_url} alt={product.title}></img>
                      <p className='cartText'>{product.title}</p>
                      <p className='cartText'>$ {product.price.toLocaleString()}</p>
                      <p className='cartText'>x {product.quantity}</p>
                      <span className='cartDeleteBtn' onClick={()=>removeProduct(product.id)}><FontAwesomeIcon icon={faXmark} /></span>
                    </div>
                  </div>
                )})}
                <div>
                  <Link to={'/'} className='backBtn'><FontAwesomeIcon icon={faArrowLeft}/> Volver Atrás</Link>
                </div>
          </div>
          <CheckOut/>
        </div>
           : 
        <div className='emptyCartBox'>
          <p className='cartTextEmpty'>Tu Carrito está Vacío</p>
          <Link to={'/'} className='btn'>Comprar Productos</Link>
        </div>}
    </div>
  )
}

export default Cart