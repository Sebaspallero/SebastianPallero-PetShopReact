import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [product,setProduct] = useState([]);
  let {id} = useParams();

  useEffect(()=>{
    axios.get(`https://api.jsonbin.io/v3/b/631549f9e13e6063dc9b4ee0/${id}`,
     {
      headers: {"X-Master-Key":"$2b$10$P0mEBR9V68/Q6mKID4J7tO7G1NpEwoSXl.r2v..rdqNM.xj6By4rK"}
     })
     .then((res)=> setProduct(res.data.record))
  },[id])

  return (
    <div>
      {product.map(details=>{
        return(
          <div key={product.id}>
              <ItemDetail data={details}/>
          </div>
        )
      })}
    </div>
  )
}

export default ItemDetailContainer