import React,{useState,useContext} from 'react'

const cartContext = React.createContext([]);

export const useCartContext = () => useContext(cartContext);

const CartProvider= ({children}) => {
  const [cart , setCart] = useState([]);
  const [total, setTotal] = useState(0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    
    const removeProduct = (id)=> setCart(cart.filter(product => product.id !== id));

    const addProduct = (item, newQuantity)=>{
      const newCart = cart.filter(product => product.id !== item.id);
      newCart.push({...item, quantity: newQuantity});
      setCart(newCart)
    };

    const totalPrice = (products)=>{
       const newTotal = products.reduce((total,item)=>total+(item.quantity*item.price),0);
       setTotal(newTotal)
       return(total)
    }

  return (
      <cartContext.Provider value={{clearCart,isInCart,removeProduct,addProduct,totalPrice,cart,total}}>
        {children}
      </cartContext.Provider>
  )
}

export default CartProvider

