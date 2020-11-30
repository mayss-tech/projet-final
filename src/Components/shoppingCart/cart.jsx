import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {removeItem,increaseItem,decreaseItem} from '../JS/actions/shopping-cartAction';

const Cart = () => {
    const cartItems= useSelector((state) => state.cartReducer.cartItems); 
    const dispatch = useDispatch();

    return ( <div > 
    {
        cartItems.map(el=><div className="cart" key={el._id}>
                <img className="imgResto"  src={el.img} alt="image"/>
                <h5>{el.menuName}</h5>
                <h5>{el.price} dt </h5>
                <div>
                <div>
                <i className="fas fa-chevron-up" onClick={()=>dispatch(increaseItem(el._id))}></i> 
                <input 
                placeholder="0"
                type="text"
                
                />
                <i className="fas fa-chevron-down" onClick={()=>dispatch(decreaseItem(el._id))}></i>
                </div>

                <button onClick={()=>dispatch(removeItem(el._id))}><i className="fas fa-trash-alt"></i></button>
                </div>
        </div>)
    }
    <div>
        <h4>Total</h4>
        {cartItems.reduce((a,b)=>a + b.price * b.qtn,0 )}
        <button >Commander</button>
    </div>
    </div> );
}
export default Cart ;