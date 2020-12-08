import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../JS/actions/shopping-cartAction";
import PopUp from "./PopUp";

const MenuCard = ({ id, menuName, price, img }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="menu" key={id}>
      <div>
        <img
          className="imgMenu"
          src={img}
          alt="resto"
        />
        <div className="menu_p">
          <h3>{menuName}</h3>
          <h5>{price} dt </h5>
        </div>
      </div>
      <button 
          onClick={() => setIsOpen(true)}>
            <i className="fas fa-eye"></i>
            </button>
      <button
        className="btn_menu"
        onClick={() => dispatch(addItem({ id, menuName, price,img }))}
      >
        <b>Ajouter au panier</b>
        <i className="fas fa-cart-plus"></i>
      </button>
      <PopUp
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        resto={{ id, menuName, price, img }}
      />
    </div>
  );
};

export default MenuCard;
