import {ADD_ITEM,
        REMOVE_ITEM,
        INCREASE_ITEM,
        DECREASE_ITEM,
        ADD
        } from '../constants/action-types';

export const addItem =(newItem,url,
    title,
    description)=>(dispatch,getState) =>{
    dispatch({
        type: ADD_ITEM,
        payload:newItem,url,
        title,
        description
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


export const addProduct = (url,
    title,
    description) =>(dispatch)=> {
    dispatch(
        {type: ADD,
        payload: url,
              title,
              description}
        )
  };


