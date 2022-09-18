import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartWindow from '../CartWindow/CartWindow'
import './CartWidget.css'
import { useCartContext } from '../../Context/CartContext'


const CartWidget = () => {

  const [cartView, setCartView] = useState(false);
  const {cart} = useCartContext();

  const handleCart = ()=> {
    setCartView(!cartView)
  }


  return (
    <>
    <div onClick={handleCart}><FontAwesomeIcon className='cartIcon' icon={faShoppingCart} />
      {cart.length > 0 ? <span className='cartLengthIcon'>{cart.length}</span> : null}
      </div>
    {cartView ? <CartWindow/> : null}
    </>
  )
}

export default CartWidget