import React,{useState,useEffect} from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


//FIREBASE
import { getFirestore,getDoc,doc } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [product,setProduct]= useState([])

  const {id} = useParams();
  
  useEffect(()=>{
    const querydb = getFirestore();
    const querydoc = doc(querydb, 'products', id);
    getDoc(querydoc)
      .then(res=> setProduct({id:res.id, ...res.data()}))
  },[id])
  
  return (
          <div>
            <ItemDetail data = {product}/>
          </div>
      )
}

export default ItemDetailContainer

