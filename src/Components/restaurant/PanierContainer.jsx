import React from 'react'
import{useDispatch, useSelector} from "react-redux";

import {
    removeItem,
    increaseItem,
    decreaseItem,
  } from "../JS/actions/shopping-cartAction";
const PanierContainer = (props) => {
    const menuDetails= useSelector((state) => state.menuReducer.menuDetails);
    const cartItems = useSelector((state) => state.cartReducer.cartItems);
    const TTC =useSelector((state)=>state.cartReducer.tot);
    const dispatch = useDispatch();
    return (
        < div >
            
            <div className="panierContainer">
            {/* <p >{menuDetails.name}</p> */}
           <div>

               {
                   cartItems.map(el=><div style={{display:"flex"}}>
                       <div >
              <i
                className="fas fa-plus"
                onClick={() => dispatch(increaseItem(el))}
              ></i>
              <h4>{el.qtn} </h4>
              <i
                className="fas fa-minus"
                onClick={() => {
                  el.qtn === 1
                    ? dispatch(removeItem(el.id))
                    : dispatch(decreaseItem(el));
                }}
              ></i>
            </div>
                       
                       <p>{el.menuName}</p>
                       <p>{el.price} dt </p>
                   </div>)
               }
               <p>Total: {cartItems.length} achats {TTC}  dt </p>
           </div>
           <div> 
               <p onClick={()=>props.history.push("/cartItems")}>Voir détails</p>
           </div>
            </div >
          
        </div>
    )
}

export default PanierContainer
