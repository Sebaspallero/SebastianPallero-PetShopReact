import React, {useState} from 'react'


const ItemCount = ({initial=0, stock=10}) => {
    const[value,setValue] = useState(initial);

    const addOn=()=>{
        if(value < stock) setValue(value+1)
        else alert("Se alcanzó el limite de compra")
    }

    const substract=()=>{
        if(value > initial) setValue(value-1)
    }

    return (
        <div className='counterBox'>
            <div className='itemCounter'>
                <button onClick={addOn}>+</button>
                <div>{value}</div>
                <button onClick={substract}>-</button>
            </div>
            <button className='btn'>Agregar al carrito</button>
        </div>
        
      )
}

export default ItemCount