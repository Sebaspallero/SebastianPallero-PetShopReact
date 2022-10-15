import React from 'react'
import './CartWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faTrash } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWindow = () => {

  const { cart, totalPrice,removeProduct, clearCart } = useCartContext()
  
  return (
    <div className='cartViewBox'>
        <div className='cartView'>
            <h2 className='cartViewTitle'>Carrito de <span className='titleAccent'>Compras</span></h2>
            {cart.length > 0 ? 
              <div>
                {cart.map((product)=>{
                  return(
                      <div className='cartViewProduct' key={product.id}>
                          <img className='cartViewImg' src={product.img_url} alt={product.title}></img>
                          <div className='cartViewTextBox'>
                            <p className='cartViewText'>{product.title}</p>
                            <p className='cartViewText'>${product.price.toLocaleString()}</p>
                          </div>
                          <p>x {product.quantity}</p>
                          <span className='cartViewDeleteBtn' onClick={()=> removeProduct(product.id)}><FontAwesomeIcon icon={faXmark} /></span>
                        </div>
                      )})}
                      <p style={{marginBottom:'30px'}}>Total: ${totalPrice(cart).toLocaleString()}</p>
                      <Link to={'/cart'} className='btn'>Finalizar Compra</Link>
                      <FontAwesomeIcon onClick={()=>clearCart()} className='cartViewDeleteAll' icon={faTrash} />
                </div>
                : <p className='cartMsgEmpty'>Tu Carrito está Vacío</p>
              }
        </div>
    </div>
  )
}

export default CartWindow