import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

const Brand = ({name})=>{
    return(
        <h3 className='brandName'>{name}</h3>
    )
}

const ItemListContainer = () => {

  const onAdd=(value)=>{
    if(value>0){
      alert(`Se han agregado ${value} producto/s`)
  }
  else{
      alert('No ha seleccionado ninguna cantidad')
  }}

  return (
    <div>
        <p className='ItemGreeting'>Te damos la bienvenida a <Brand name="Patitas"/></p>
        <ItemCount initial={0} stock={10} onAdd={onAdd}/>
        <ItemList/>
    </div>
  )
}

export default ItemListContainer