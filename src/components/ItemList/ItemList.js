import React,{useState,useEffect} from 'react'
import Item from '../Item/Item'
import './ItemList.css'
import { fetchData } from '../../products'
import { Link } from 'react-router-dom'


const ItemList = () => {

  const [products,setProducts] = useState([]);

  useEffect(()=>{
    fetchData
       .then((res)=>{
        return res
       })
       .then((resp)=>setProducts(resp))
       .catch(err=>console.log(err))
  },[])

  return (
    <div className='productsBox'>
      {products.map((product)=>{
        return(
        <div key={product.id}>
          <Link to={`/item/${product.id}`}>
            <Item data={product}/>
          </Link>  
        </div>)  
      })}
    </div>
  )
}

export default ItemList