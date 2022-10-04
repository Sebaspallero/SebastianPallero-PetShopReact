import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import './CheckOut.css'


// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Firebase/firebaseConfig'


const CheckOut = () => {

  const navigate = useNavigate();
  const {cart,totalPrice,clearCart} = useCartContext(); 

  const initialState={
    name:'',
    email:'',
    phone:'',
    items: cart.map(product=>({id:product.id,title:product.title,price:product.price,quantity:product.quantity})),
    date: Date(),
    total: totalPrice(cart)
  }

  const [values, setValues] = useState(initialState);
	const [purchaseID, setPurchaseID] = useState('');

  const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
    if(values.name && values.email && values.phone !== ''){
      const docRef = await addDoc(collection(db, 'purchases'), {
        values,
      });
      setPurchaseID(docRef.id);
      setValues(initialState);
      alert(`Su orden a sido completada con Éxito. Este es su código de compra ${docRef.id}`)
      navigate('/');
      clearCart()
    }
    else{
      alert('Debe completar todos los campos del formulario')
    }
	};

  return (
    <div className='checkOutBox'>
        <h2 className='checkOutTittle'>Check <span className='checkOutTittleAccent'>Out</span></h2>
        <p className='checkOutQuantity'>Items {cart.length}</p>
        <form className='checkOutForm' onSubmit={onSubmit}>
            <input 
              onChange={handleOnChange}
              type='text' 
              name='name'
              placeholder='Su Nombre' 
              className='checkOutInput'>
            </input>
            <input 
              onChange={handleOnChange}
              type='email' 
              name='email' 
              placeholder='Su E-mail' 
              className='checkOutInput'>
            </input>
            <input 
              onChange={handleOnChange}
              type="number" 
              name='phone'
              placeholder='Su Teléfono' 
              className='checkOutInput'>
            </input>
            <p className='cartTotal'>Total: ${totalPrice(cart).toLocaleString()}</p>
            <div className='btnsCheckOutBox'>
                <button type='submit' className='btn'>Terminar Compra</button>
                <FontAwesomeIcon onClick={()=>clearCart()} className='cartDeleteAll' icon={faTrash}/>
            </div>
        </form>
    </div>
    
  )
}

export default CheckOut