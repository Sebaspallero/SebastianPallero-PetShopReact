import React,{useState,useEffect} from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../products'


const ItemDetailContainer = () => {
  const [product,setProduct]= useState([])
  const {id} = useParams();

  useEffect(()=>{
    const data = fetchData
    if(id){
      data.then(res=>setProduct(res.find(prod=>prod.id==id)));
    }
  },[id])
  
  return (
          <div>
            <ItemDetail data = {product}/>
          </div>
      )
}

export default ItemDetailContainer

