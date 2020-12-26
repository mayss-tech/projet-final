import React,{useState} from 'react';
import PanierContainer from './PanierContainer';
import {useSelector} from "react-redux";
const Pannier = () => {
    const cartItems = useSelector((state) => state.cartReducer.cartItems);
    const TTC =useSelector((state)=>state.cartReducer.tot);
    const [open, setOpen]=useState(false);
    return (
        <div style={{position:"relative"}}>
          
            <div className="panier_part1">
              <div>
              <i className="fas fa-file-alt"></i>
              </div>
            <div >
            {cartItems.length === 0 ? (
            <p className="panier_p"><b>Panier vide</b> </p>
        ) : (
            <p className="panier_p"><b>
            {cartItems.length} achats 
          {" "}
            
{TTC}dt
            </b>
            </p>
        )}
            </div>
            <div onClick={()=>setOpen(!open)}>
            <i className="fas fa-sort-down" ></i>
              </div>
            </div>
  <div  >
        <PanierContainer open={open}/>
  </div>
</div>
    )
}
export default Pannier
