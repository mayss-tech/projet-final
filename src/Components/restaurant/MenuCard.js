import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../JS/actions/shopping-cartAction";
import PopUp from "./PopUp";

const MenuCard = ({ id, menuName, price, img,qtn, menuDesc, nameResto}) => {
  console.log('id', id)
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="menu" key={id}>
      <div>
        <img
          className="menu_img"
          src={img}
          alt="resto"
        />
        <div>
          <h3 className="menu_p1"  >{menuName}</h3>
          <h5 className="menu_p2" >{price} dt </h5>
  
        </div>
      </div>
      <div className="menu_btn">
      <button className="menu_btn1"
          onClick={() => setIsOpen(true)}>
            <i className="fas fa-eye"></i>
            </button>
      <button className="menu_btn2"
        onClick={() => dispatch(addItem( {id, menuName, price,img ,qtn , nameResto}))}
      >
        <b>Ajouter au panier</b>
        <i className="fas fa-cart-plus"></i>
      </button>
      </div>
      <PopUp
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        resto={{ id, menuName, price, img , menuDesc}}
      />
    </div>
  );
};

export default MenuCard;
