import React from 'react'
import './CartWindow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../Context/CartContext'

const CartWindow = () => {

    const { cart } = useCartContext()
   /*  const {removeProduct} = useCartContext() */
    console.log ('carrito Window:',cart)

  return (
    <div className='cartViewBox'>
        <div className='cartView'>
            <h2 className='cartViewTitle'>Carrito de <span className='titleAccent'>Compras</span></h2>
            {cart.length > 0 ? 
              <div>
                {cart.map((product)=>{
                  return(
                    <>
                      <div className='cartViewProduct' key={product.id}>
                          <img className='cartViewImg' src={product.img_url} alt={product.title}></img>
                          <p className='cartViewText'>{product.title}</p>
                          <p>X {product.quantity}</p>
                          <span className='cartViewDeleteBtn' /* onClick={removeProduct(product.id)} */><FontAwesomeIcon icon={faXmark} /></span>
                      </div>
                      <button className='btn'>Finalizar Compra</button>
                      </>)})}
                </div>
                : <p style={{marginTop:'80px',marginLeft:'80px',marginBottom:'30px'}}>Su Carrito está Vacio</p>
                }
        </div>
    </div>
  )
}

export default CartWindow