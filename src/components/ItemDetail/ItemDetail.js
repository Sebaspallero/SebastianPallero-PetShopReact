import React,{useState,useEffect} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {
  
  const[goToCart,setGoToCart]=useState(false);

  const {addProduct} = useCartContext()

  const onAdd=(value)=>{
    value > 0 && setGoToCart(true);
    addProduct(data, value)
  }


  return (
    <div className='itemDetailBox'>
        <div>
            <img src={data.img_url} className='itemDetailImg' alt="Imagen de producto"></img>
        </div>
        <div className='ItemDetailTextBox'>
            <h2 className='itemDetailTitle'>{data.title}</h2>
            <p className='itemDetailPrice'>${data?.price?.toLocaleString() || ''}</p>
            <p className='ietmDetailDescription'>{data.description}</p>
            {
              goToCart ?  <><Link to='/'> <button className='btn'>Seguir Comprando</button></Link><Link to='/cart'> <button className='btn'>Finalizar Compra</button></Link></> : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            }
       </div>
    </div>
  )
}

export default ItemDetail