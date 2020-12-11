import React from "react";
import { useSelector } from "react-redux";
const Order = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const TTC =useSelector((state)=>state.cartReducer.tot)
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  return (
    <div className="order">
      <h3>Merci d'avoir passé commande</h3>
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
      </div>
    </div>
  );
};
export default Order;
