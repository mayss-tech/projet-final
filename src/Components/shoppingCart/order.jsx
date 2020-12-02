import React from 'react';
import { useDispatch, useSelector } from "react-redux";

const Order = () => {
    const user = useSelector((state) => state.userReducer.user);
    const cartItems= useSelector((state) => state.cartReducer.cartItems); 
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    return ( <div style={{marginTop:"10%"}}>
{!isAuth ?[]:<p>{JSON.stringify(user)} </p> }
{cartItems.map(el=><div>
 <p>{el.menuName} </p>
 <p>{el.price} dt</p></div>)}


    </div> );
}
export default Order;