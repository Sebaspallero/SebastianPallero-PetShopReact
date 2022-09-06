import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({data}) => {
  return (
    <div className='itemDetailBox'>
        <div className='itemDetailImg'>
            <img src={data.img_url} alt="Imagen de producto"></img>
        </div>
        <div className='ItemDetailTextBox'>
            <h2 className='itemDetailTitle'>{data.title}</h2>
            <p className='itemDetailPrice'>{data.price}</p>
            <p className='ietmDetailDescription'>We've developed simple RESTful APIs which will seamlessly integrate with new or existing web and mobile applications in no time. The data you stored can be secured using a Private key that other users cannot access.</p>
            <button className='btn'>Agregar al carrito</button>
        </div>

    </div>
  )
}

export default ItemDetail