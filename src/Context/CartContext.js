import React,{useState,useContext} from 'react'

const cartContext = React.createContext([]);

export const useCartContext = () => useContext(cartContext);

const CartProvider= ({children}) => {
  const [cart , setCart] = useState([]);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    
    const removeProduct = (id)=> setCart(cart.filter(product => product.od !== id));

    const addProduct = (item, newQuantity)=>{
      const newCart = cart.filter(product => product.id !== item.id);
      newCart.push({...item, 'quantity:': newQuantity});
      setCart(newCart)
    };

    console.log('Carrito:',cart)


  return (
      <cartContext.Provider value={{clearCart,isInCart,removeProduct,addProduct}}>
        {children}
      </cartContext.Provider>
  )
}

export default CartProvider

