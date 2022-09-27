import React,{useState,useEffect} from 'react'
import Item from '../Item/Item'
import { fetchData } from '../../products'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './ItemList.css'

//FIREBASE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from '../../Firebase/firebaseConfig'



const ItemList = () => {

  const [products,setProducts] = useState([]);

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
  },[])

 /*  const {category} = useParams() */
 
  /* useEffect(()=>{
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
  },[category]) */

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