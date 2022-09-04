import React, {useState} from 'react'


const ItemCount = ({stock,initial,onAdd}) => {
    
    const[value,setValue] = useState(initial);

    const add=()=>{
        if(value < stock) setValue(value+1)
        else alert("Se alcanzó el limite de compra")
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
                <button onClick={substract}>-</button>
                <div>{value}</div>   
                <button onClick={add}>+</button>
            </div>
            <button onClick={quantity} className='btn'>Agregar al carrito</button>
        </div>
        
      )
}

export default ItemCount