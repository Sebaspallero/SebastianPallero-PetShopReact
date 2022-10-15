import React, {useState} from 'react'
import Alert from '@mui/material/Alert';
import './ItemCount.css'


const ItemCount = ({stock,initial,onAdd}) => {
    
    const[value,setValue] = useState(initial);
    const [stockMessage, setStockMessage] = useState(false)

    const add=()=>{
        if(value < stock) setValue(value+1)
        else{
            setStockMessage(true)
            setTimeout(()=>{
                setStockMessage(false)
            },4000)
        }
    };

    const substract=()=>{
        if(value > initial) setValue(value-1)
    };

    const quantity= ()=>{
        onAdd(value)
    }


    return (
        <div className='counterBox'>
            <div className='itemCounter'>
                <button className='btnsAdd' onClick={substract}>-</button>
                <div>{value}</div>   
                <button className='btnsAdd' onClick={add}>+</button>
            </div>
            <button onClick={quantity} className='btn'>Agregar al carrito</button>
            {stockMessage ? <Alert className='alertMessage' severity="warning">Alcanzaste el limite!</Alert> : null}
        </div>
        
      )
}

export default ItemCount