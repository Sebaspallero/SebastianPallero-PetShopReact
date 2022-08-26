import React,{useState,useEffect} from 'react'
import Item from '../Item/Item'
import './ItemList.css'
import {productsData} from '../../products'

const ItemList = () => {

  const [products,setProducts] = useState([]);

  useEffect(()=>{
    const getData=()=>{
      return new Promise((resolve,reject)=>{
        if(productsData.length != 0){
          setTimeout(()=>{
            return resolve (productsData),5000})
        } 
        else{
          return reject('No hay Productos')
        }
      })
    }
    const fetching = async()=>{
      try{
        const fetchedData = await getData();
        setProducts(fetchedData);
      }
      catch(err){
        console.log(err)
      }
    }
    fetching();
  },[])

  return (
    <div className='productsBox'>
      {products.map((product)=>{
        return <Item 
        key={product.id} 
        title={product.title} 
        price={product.price} 
        img={product.img_url}
        />
      })}
    </div>
  )
}

export default ItemList