import React from "react";
import { useSelector } from "react-redux";

const Order = () => {
  const user = useSelector((state) => state.userReducer.user);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const TTC =useSelector((state)=>state.cartReducer.tot)
  const {name,telephone,adress,codePostal}=user
  
  
  return (
    <div className="order">
      <h3>Merci d'avoir passé commande !! </h3>
      <div className="order_details">
        <p>Order N° {Date.now()} </p>
        <p>Nom et prènom : {name}</p>
        <p>Téléphone : {telephone}</p>
        <p>Livraison : {adress} </p>
        <p>Code postal : {codePostal}</p>
        <hr />
        <h5>Vos achats</h5>
        {/* <p>{cartItems.menuName}</p> */}
  <p>{TTC}</p>

      </div>
    </div>
  );
};

export default Order;
