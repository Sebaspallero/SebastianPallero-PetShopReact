import React from 'react'
import './Item.css'

const Item = ({title,price,img}) => {
  return (
    <div className='itemBox'>
        <div className='ItemImgBox'>
          <img className='itemImg' src={img} alt='Imagen de Producto'></img>
        </div>
        <h3 className='itemTitle'>{title}</h3>
        <p className='itemPrice'>$ {price}</p>
    </div>
  )
}

export default Item