import React from "react";
import { useSelector } from "react-redux";
const Order = () => {
  const user = useSelector((state) => state.userReducer.user);
  const TTC =useSelector((state)=>state.cartReducer.tot)
  const restaurants = useSelector((state) => state.restoReducer.restaurants);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  return (
    <div className="order">
      <h3>Merci d'avoir passé commande !! </h3>
      <div className="order_details">
        <p>Order N° {Date.now()} </p>
        <p>Nom et prènom : {user.name}</p>
        <p>Téléphone : {user.telephone}</p>
        <p>Livraison : {user.adress} </p>
        <p>Code postal : {user.codePostal}</p>
        <hr />
        <h5>Vos achats</h5>
        {cartItems.map(el=><div>
          <p>{el.menuName} </p>
          <p>{el.price} dt </p>
        </div>)}
  <h5> Prix à payer : {TTC} dt </h5>
      </div>
    </div>
  );
};

export default Order;
