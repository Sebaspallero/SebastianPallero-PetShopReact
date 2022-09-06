import React from 'react'
import './Item.css'

const Item = ({data}) => {
  return (
    <div className='itemBox'>
        <div className='ItemImgBox'>
          <img className='itemImg' src={data.img_url} alt='Imagen de Producto'></img>
        </div>
        <h3 className='itemTitle'>{data.title}</h3>
        <p className='itemPrice'>$ {data.price}</p>
    </div>
  )
}

export default Item