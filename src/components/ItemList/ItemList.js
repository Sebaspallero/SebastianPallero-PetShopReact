import React,{useState,useEffect} from 'react'
import Item from '../Item/Item'
import './ItemList.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const ItemList = () => {

  //BIN 631549f9e13e6063dc9b4ee0

  const [products,setProducts] = useState([]);

  useEffect(()=>{
    axios.get('https://api.jsonbin.io/v3/b/631549f9e13e6063dc9b4ee0',
     {
      headers: {"X-Master-Key":"$2b$10$P0mEBR9V68/Q6mKID4J7tO7G1NpEwoSXl.r2v..rdqNM.xj6By4rK"}
     })
     .then((res)=> setProducts(res.data.record))
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