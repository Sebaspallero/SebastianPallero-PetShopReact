import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartWindow from '../CartWindow/CartWindow'
import './CartWidget.css'


const CartWidget = () => {

  const [cartView, setCartView] = useState(false);

  const handleCart = ()=> {
    setCartView(!cartView)
  }


  return (
    <>
    <div onClick={handleCart}><FontAwesomeIcon className='cartIcon' icon={faShoppingCart} /></div>
    {cartView ? <CartWindow/> : null}
    </>
  )
}

export default CartWidget