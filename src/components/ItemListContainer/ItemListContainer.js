import React from 'react'
import ItemList from '../ItemList/ItemList'

const Brand = ({name})=>{
    return(
        <h3 className='brandName'>{name}</h3>
    )
}

const ItemListContainer = () => {
  return (
    <div>
        <p className='ItemGreeting'>Te damos la bienvenida a <Brand name="Patitas"/></p>
        <ItemList/>
    </div>
  )
}

export default ItemListContainer