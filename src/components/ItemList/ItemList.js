import React,{useState,useEffect,useContext} from 'react'
import Item from '../Item/Item'
import './ItemList.css'
import { fetchData } from '../../products'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'



const ItemList = () => {

  const [products,setProducts] = useState([]);
  const {category} = useParams()

  useEffect(()=>{
    if(!category){
      fetchData
       .then((resp)=>setProducts(resp))
       .catch(err=>console.log(err))
    }
    else{
      fetchData
      .then(res=>setProducts(res.filter(prod=>prod.category==category)))
      .catch(err=>console.log(err))
    }
  },[category])

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