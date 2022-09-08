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
        <h3 className='ItemGreeting'>Nuestros <Brand name="Productos"/></h3>
        <ItemList/>
    </div>
  )
}

export default ItemListContainer