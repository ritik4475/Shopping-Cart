import React, { createContext, useEffect, useReducer } from 'react'
import './cart.css';
import { products } from './products'
import ContextCart from './ContextCart'
import { reducer } from './reducer'

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0
};

export default function Cart() {

  //const [item, setitem] = useState(products)
  const[state, dispatch] = useReducer(reducer, initialState)
 
  //to delete individual item
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id
    })
  };

  //clear cart
  const clearCart = () => {
    return dispatch({type:"CLEAR_CART"})
  }

  //increment items
  const increment = (id) =>{
    return dispatch({type: "INCREMENT", payload: id})
  }

  //decrement items
  const decrement = (id) => {
    return dispatch({type:"DECREMENT", payload: id});
  }

  //useEffect to update the data
  useEffect(() => {
    dispatch({type: "GET_TOTAL"})
    
  },[state.item])

  return (
    
      <CartContext.Provider value={{...state, removeItem, clearCart, increment, decrement}}>
        <ContextCart />
      </CartContext.Provider>

  )
}
