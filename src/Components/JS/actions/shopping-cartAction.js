import {ADD_ITEM,
        REMOVE_ITEM,
        INCREASE_ITEM,
        DECREASE_ITEM,
        ADD
        } from '../constants/action-types';

export const addItem =(newItem)=>(dispatch,getState) =>{
    dispatch({
        type: ADD_ITEM,
        payload:newItem
    })
    localStorage.setItem("cart", JSON.stringify(getState().cartItems))
};

export const removeItem =(id)=>(dispatch)=>{

    dispatch({
        type:REMOVE_ITEM,
        payload:id
    })
    
};

export const increaseItem =(el)=>(dispatch,getState)=>{

    dispatch({
        type:INCREASE_ITEM,
        payload : el
    })
};

export const decreaseItem =(el)=>(dispatch,getState)=>{
    dispatch({
        type: DECREASE_ITEM,
        payload : el
    })
};

export const addProduct = (newProduct) =>(dispatch,getState)=> {
    dispatch(
        {type: ADD,
        payload:newProduct }
        )
    localStorage.setItem("cart", JSON.stringify(getState().cartItems))
};


