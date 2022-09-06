import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({data}) => {
  
  const onAdd=(value)=>{
    if(value>0){
      alert(`Se han agregado ${value} producto/s`)
  }
  else{
      alert('No ha seleccionado ninguna cantidad')
  }}

  return (
    <div className='itemDetailBox'>
        <div>
            <img src={data.img_url} className='itemDetailImg' alt="Imagen de producto"></img>
        </div>
        
        <div className='ItemDetailTextBox'>
            <h2 className='itemDetailTitle'>{data.title}</h2>
            <p className='itemDetailPrice'>${data.price}</p>
            <p className='ietmDetailDescription'>We've developed simple RESTful APIs which will seamlessly integrate with new or existing web and mobile applications in no time. The data you stored can be secured using a Private key that other users cannot access.</p>
            <ItemCount initial={0} stock={10} onAdd={onAdd}/>
       </div>
       
        
    </div>
  )
}

export default ItemDetail