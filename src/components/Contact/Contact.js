import React,{useState} from 'react'
import Swal from 'sweetalert2'
import './Contact.css'

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Firebase/firebaseConfig'

const Contact = () => {

  const initialState={
    name:'',
    email:'',
    message:'',
  }

  const [values, setValues] = useState(initialState);

  const OnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
    if(values.name && values.email && values.message !== ''){
        await addDoc(collection(db, 'messages'), {
        values,
      });
      Swal.fire({ 
        position: 'bottom-start',
        icon: 'success',
        text: '¡Mensaje Enviado!',
        showConfirmButton: false,
        allowOutsideClick:true,
        backdrop:true,
        timer: 2000,
        customClass:{
            title: 'alertTitle',
        }
      })
    }
    else{
      Swal.fire({ 
        position: 'bottom-start',
        icon: 'warning',
        text: 'Debes completar todos los campos',
        showConfirmButton: false,
        allowOutsideClick:true,
        backdrop:true,
        timer: 2000,
        customClass:{
            title: 'alertTitle',
        }
      })
    }
	};
  
  return (
    <div className='contactBox'>
        <div>
            <img src='/assets/contact.png' alt='Imagen Contacto' className='contactImg'></img>
        </div>
        <div className='contactFormBox'>
            <h2 className='titleSectionAbout'>Contacto</h2>
            <form className='contactForm' onSubmit={onSubmit}>
                <input
                  onChange={OnChange}
                  type='text' 
                  name='name'
                  placeholder='Su Nombre' 
                  className='formInput'>
                 </input>
                <input
                  onChange={OnChange}
                  type='email' 
                  name='email'
                  placeholder='Su E-mail' 
                  className='formInput'>
                </input>
                <textarea
                  onChange={OnChange}
                  type='text'
                  name='message' 
                  placeholder='Su Mensaje' 
                  className='formInput' 
                  rows="5">
                </textarea>
                <button className='btn'>Enviar Mensaje</button>
            </form>
        </div>
    </div>
  )
}

export default Contact


