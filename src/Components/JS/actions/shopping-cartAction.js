import {ADD_ITEM,
        REMOVE_ITEM,
        INCREASE_ITEM,
        DECREASE_ITEM
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

export const increaseItem =(el)=>(dispatch)=>{

    dispatch({
        type:INCREASE_ITEM,
        payload : el
    })
};

export const decreaseItem =(el)=>(dispatch)=>{
    dispatch({
        type: DECREASE_ITEM,
        payload : el
    })
};



