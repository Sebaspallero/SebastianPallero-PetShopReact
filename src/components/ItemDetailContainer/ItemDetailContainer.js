import React,{useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../products'

const ItemDetailContainer = () => {
  const [product,setProduct]= useState([])
  const {id} = useParams();

useEffect(()=>{
  fetchData
  .then((res)=>setProduct(res.find( product=>product.id == {id} /* 1 Si se pude pasar un valor numerico */ )))
  .catch(err=>console.log(err))
},[])

  return (
          <div>
            <ItemDetail data = {product}/>
          </div>
      )
}

export default ItemDetailContainer

{/* {productsData.filter(product=>product.id==id).map((product)=>(
        <div key={product.id}>
          <ItemDetail data={product}/>
        </div>
      ))} */}