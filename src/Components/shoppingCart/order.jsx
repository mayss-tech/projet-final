import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Bar from "../Bar/Bar";
import { nextStep } from "../JS/actions/ProgressBar";
const Order = (props) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const TTC =useSelector((state)=>state.cartReducer.tot)
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="order">
      <div>
      <Bar/>
      </div>
      
      
      <h5>Order N° {Date.now()} </h5>
      <div className="user_details">
        <p>Nom et prènom : {isAuth.name}</p>
        <p>Téléphone : {isAuth.telephone}</p>
        <p>Livraison : {isAuth.adress} </p>
        <p>Code postal :{isAuth.codePostal}</p>
        <hr />
        <h5>Vos achats</h5>
        {cartItems.map( el=><div className="cartItems_details" >
        <p> Restaurant : {el.nameResto}</p>
          <p> Menu : {el.menuName} </p>
          <p> Quantité : {el.qtn}  </p>
          <p> Prix  : {el.price} dt </p>
        </div>)}
        <h5>Frais de livraison : 5 dt</h5>
        <h5> Prix à payer : {TTC} dt </h5>
        <button onClick={()=>{props.history.push('Confirmer la commande');
        dispatch(nextStep(60))
      }
      
      
      }>Confirmer la commande</button>
      </div>
    </div>
  );
};
export default withRouter (Order);
