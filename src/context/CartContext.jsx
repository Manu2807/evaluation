import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const[count ,setCount]=React.useState(1)
  React.useEffect(()=>{
  fetch(`http://localhost:8080/cartItems`)
  .then((res)=>res.json())
  .then((res)=>setCount(res.length))
  .catch((error)=>console.log(error))
  },[])
 
  return <CartContext.Provider value={{count,setCount}}>{children}</CartContext.Provider>;
};
