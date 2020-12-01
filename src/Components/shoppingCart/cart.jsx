import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {removeItem,increaseItem,decreaseItem} from '../JS/actions/shopping-cartAction';
import { Link } from 'react-router-dom';
const Cart = (props) => {
    const cartItems= useSelector((state) => state.cartReducer.cartItems); 
    const qtn= useSelector((state) => state.cartReducer.qtn); 
    const dispatch = useDispatch();

    return ( <div style={{marginTop:"20%"}} > 
        <div className="shopping-cart cart_header" >{cartItems.length===0?"votre pannier est vide": 
        <div className= "cart_p"> Votre panier contient {cartItems.length} achats <i className="fas fa-utensils"></i></div>}{"  "} 
        </div>
    {cartItems.map(el=><div className="cart" key={el._id}>
                <img className="imgResto"  src={el.img} alt="image"/>
                <h5>{el.menuName}</h5>
                <h5>{el.price} dt </h5>
                <div>
                <i className="fas fa-chevron-up" onClick={()=>dispatch(increaseItem(el._id,qtn))}></i> 
                <p>{el.qtn} </p>
                <i className="fas fa-chevron-down" onClick={()=>dispatch(decreaseItem(el.id,qtn))}></i>
                </div>
                <button className="btn1_cart" onClick={()=>dispatch(removeItem(el._id))}><i className="fas fa-trash-alt"></i></button>
        </div>)}
    <hr/>
    <div className="total_cart">
        <h4>Total</h4>
        {Number (cartItems.reduce((a,b)=>a + b.price * b.qtn, 0 ))} dt
        <button className="btn2_cart"   onClick={()=>props.history.push('/order')}>Commander</button>
    </div>
    </div> );
}
export default Cart ;