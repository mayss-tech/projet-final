import {ADD_ITEM,
        REMOVE_ITEM,
        INCREASE_ITEM,
        DECREASE_ITEM,
        TOTAL
        } from '../constants/action-types';

export const addItem =(newItem)=>(dispatch,getState) =>{
    dispatch({
        type: ADD_ITEM,
        payload:newItem
    })
    localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cartItems))
};

export const removeItem =(id)=>(dispatch,getState)=>{
    dispatch({
        type:REMOVE_ITEM,
        payload:id
    })
    localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cartItems))
};

export const increaseItem =(el)=>(dispatch,getState)=>{
    dispatch({
        type:INCREASE_ITEM,
        payload : el
    })
    localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cartItems))
};

export const decreaseItem =(el)=>(dispatch,getState)=>{
    dispatch({
        type: DECREASE_ITEM,
        payload : el
    })
    localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cartItems))
};

export const totalCart =(tot)=>(dispatch,getState)=>{
    dispatch({
        type:TOTAL,
        payload:tot
    })

    localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cartItems))
}



