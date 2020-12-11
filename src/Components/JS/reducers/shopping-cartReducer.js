
import {ADD_ITEM,
        REMOVE_ITEM,
        INCREASE_ITEM,
        DECREASE_ITEM,
        TOTAL
        } from "../constants/action-types";

const initialState={
    cartItems:JSON.parse(localStorage.getItem('cart' || '[]')),
    qtn:0,
}
const cartReducer =(state=initialState ,{ type,payload})=>{
    console.log('item', payload)
    switch(type){
        case ADD_ITEM : 
        const item = payload;
        const isExist = state.cartItems.find(el=>el.id===item.id)
        if(!isExist){
            return{
            ...state,
            cartItems:[...state.cartItems,item]   
            }
        }
        case REMOVE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(el=>el.id !== payload)
            }
        case INCREASE_ITEM:
            return {
                ...state,
                cartItems : state.cartItems.map(el=>el.id === payload.id
                    ? {...el, qtn: el.qtn+1} : el)
            }
        case DECREASE_ITEM:
            return {
                ...state,
                cartItems : state.cartItems.map(el=>el.id===payload.id
                ? {...el,qtn: el.qtn-1} : el)
        }
        case TOTAL:
            return{
                ...state,
                tot:payload
            }
        default:
            return state
}};
export default cartReducer;