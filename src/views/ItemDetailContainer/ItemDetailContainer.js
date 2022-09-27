import React,{useState,useEffect} from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../products'

//FIREBASE
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/firebaseConfig'



const ItemDetailContainer = () => {
  const [product,setProduct]= useState([])
  const [products,setProducts] = useState([]);
  const {id} = useParams();

  
  const getProducts = async () =>{
    const q = query(collection(db, "products"));
    const docs = [];
    const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id:doc.id})
    });
    setProducts(docs)
  }
  
  useEffect(()=>{
    getProducts()
    if(id){
      setProduct(products.find(prod=>prod.id==id));
    }
  },[id])
  
  return (
          <div>
            <ItemDetail data = {product}/>
          </div>
      )
}

export default ItemDetailContainer

