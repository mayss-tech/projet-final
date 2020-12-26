import React from 'react'
import{useDispatch, useSelector} from "react-redux";
import { withRouter } from 'react-router-dom';
import { nextStep } from '../JS/actions/ProgressBar';

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
        < div style={{position:"absolute"}} className= {props.open?"p":"none"}>
            
            <div className="panierContainer">
            {/* <h5 >{menuDetails.name}</h5> */}
           <div >

               {
                   cartItems.map(el=><div className="panierContainer_part1">
                       <div style={{display:"flex"}} >
              <i
                className="fas fa-plus-square"
                onClick={() => dispatch(increaseItem(el))}
              ></i>
             <h5>{el.qtn} </h5>
              <i
                className="fas fa-minus-square"
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
              
              <div className="panierContainer_part2" >
                <h5>Total : </h5>
                 <p> {cartItems.length} achats</p>
                  <p> {TTC}  dt </p></div> 
           </div>
         
           <div > 
               <button className="panierContainer_part3"  onClick={()=>{dispatch(nextStep(40))
                 props.history.push("/cartItems")}}><b>Voir détails</b></button>
           </div>
            
            </div >
          
        </div>
    )
}

export default withRouter (PanierContainer); 