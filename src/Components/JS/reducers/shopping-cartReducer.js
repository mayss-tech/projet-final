import {ADD_ITEM,
        REMOVE_ITEM,
        INCREASE_ITEM,
        DECREASE_ITEM
        } from "../constants/action-types";

const initialState={
cartItems:[],
qtn:0
}
const cartReducer =(state=initialState ,{ type,payload})=>{
    switch(type){
        case ADD_ITEM : 
            const item = payload;
            const isExist = state.cartItems.find(el=>el._id===item._id)
            if(isExist){
                return {
                ...state,
                cartItems :[...state.cartItems.map(el=>el._id===isExist._id?item:el)]
                }
            }if(!isExist){
                return{
                ...state,
                cartItems:[...state.cartItems,item]   
                }
            }break;
        case REMOVE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(el=>el._id !== payload)
            }
        case INCREASE_ITEM:
            return {
                ...state,
                cartItems : state.cartItems.map(el=>el._id===payload._id
                    ? {...el,qtn: el.qtn+1} : el)
            }
        case DECREASE_ITEM:
            return{
                ...state,
                cartItems : state.cartItems.map(el=>el._id===payload._id
                ? {...el,qtn: el.qtn-1} : el)
        }
        default:
            return state
}};
export default cartReducer;