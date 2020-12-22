import React from 'react';
import PanierContainer from './PanierContainer';
import {useSelector} from "react-redux";
const Pannier = () => {
    const cartItems = useSelector((state) => state.cartReducer.cartItems);
    const TTC =useSelector((state)=>state.cartReducer.tot);
    return (
        <div>
          
            <div className="panier_part1">
              <div>
              <i className="fas fa-file-alt"></i>
              </div>
            <div>
            {cartItems.length === 0 ? (
          <div className="cart_p">
            <p><b>Panier vide</b> </p>
          </div>
        ) : (
          <div className="cart_p">
            <p><b>
            {cartItems.length} achats 
{TTC} dt
            </b>
             
            </p>
          </div>
        )}
            </div>
            <div>
            <i className="fas fa-sort-down" ></i>
              </div>
            </div>
  <div  className="panier_part2" >
    <ul>
      {/* <li>
        <PanierContainer/>
      </li> */}
    </ul>
  </div>
</div>
    )
}
export default Pannier
