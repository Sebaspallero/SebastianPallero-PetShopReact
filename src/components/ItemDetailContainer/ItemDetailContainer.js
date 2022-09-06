import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
  const {id} = useParams();
  const productsData = [
    {
        id:1,
        title:'New Zealand - Pollo',
        price:1350,
        img_url:"/assets/producto1.jpg"
    },
    {
        id:2,
        title:'New Zealand - Carne',
        price:1500,
        img_url:"/assets/producto2.jpg"
    },
    {
        id:3,
        title:'New Zealand - Cordero',
        price:1600,
        img_url:"/assets/producto3.jpg"
    },
    {
        id:4,
        title:'New Zealand - Snack Carne',
        price:1200,
        img_url:"/assets/producto4.jpg"
    },
    {
        id:5,
        title:'New Zealand - Snack Ciervo',
        price:1400,
        img_url:"/assets/producto5.jpg"
    },
    {
        id:6,
        title:'New Zealand - Salmon',
        price:1400,
        img_url:"/assets/producto6.jpg"
    },
    {
        id:7,
        title:'New Zealand - Carne Premuim',
        price:1700,
        img_url:"/assets/producto7.jpg"
    },
    {
        id:8,
        title:'New Zealand - Pescado',
        price:1200,
        img_url:"/assets/producto8.jpg"
    }
]

  return (
    <div>
      {productsData.filter(product=>product.id==id).map((product)=>(
        <div key={product.id}>
          <ItemDetail data={product}/>
        </div>
      ))}
    </div>
  )
}

export default ItemDetailContainer
