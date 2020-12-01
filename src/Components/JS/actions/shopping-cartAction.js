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
    localStorage.getItem('cartItems',JSON.stringify(getState().cartItems))
};

export const removeItem =(id)=>(dispatch,getState)=>{
    dispatch({
        type:REMOVE_ITEM,
        payload:id
    })
    localStorage.getItem('cartItems',JSON.stringify(getState().cartItems))
};

export const increaseItem =(id,qtn)=>(dispatch)=>{
    dispatch({
        type:INCREASE_ITEM,
        payload : id,qtn
    })
};

export const decreaseItem =(id,qtn)=>(dispatch)=>{
    dispatch({
        type: DECREASE_ITEM,
        payload : id,qtn
    })
};

