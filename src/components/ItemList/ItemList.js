import React,{useState,useEffect} from 'react'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import { useParams } from 'react-router-dom'
import './ItemList.css'

//FIREBASE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from '../../Firebase/firebaseConfig'

const ItemList = () => {

  const [products,setProducts] = useState([]);
  const {category} = useParams() 
  const [loading,setLoading] = useState(false)


  useEffect(()=>{
    setLoading(true)
    const queryCollection = query(collection(db, "products"));
      if(category){
          const queryFilter = query(queryCollection, where('category', '==', category));
          getDocs(queryFilter)
          .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
      }
      else{
          getDocs(queryCollection)
          .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
      }
      setTimeout(()=>{
        setLoading(false)
      },1000)
  },[category])

  return (
    <>
    {loading ? <Spinner/> :  
    <div className='productsBox'>
        {products.map((product)=>{
          return(
          <div key={product.id}>
            <Link to={`/item/${product.id}`}>
              <Item data={product}/>
            </Link>  
          </div>)  
        })}
      </div>}
    </>
  )
}

export default ItemList