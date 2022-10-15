import React from 'react'
import { Link } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog,faCat, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './ItemListContainer.css'


const ItemListContainer = () => {
  return (
    <div id='productos' style={{paddingTop:'20px'}}>
        <h2 className='ItemGreeting'>Nuestros <span className='brandName'>Productos</span></h2>
        <div className='categorySelectorBox'>
          <Link to='/' className="btn"> TODO <FontAwesomeIcon  icon={faShoppingCart} /></Link>
          <Link to='/categoria/perros' className="btn"> PERROS <FontAwesomeIcon  icon={faDog} /></Link>
          <Link to='/categoria/gatos' className="btn"> GATOS <FontAwesomeIcon icon={faCat} /></Link>
        </div>
        <ItemList/>
    </div>
  )
}

export default ItemListContainer