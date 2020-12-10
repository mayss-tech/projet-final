import React, { useState } from "react";
import { addItem } from "../JS/actions/shopping-cartAction";
import PopUp from "./PopUp";
import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";

const MenuDetails = () => {
  const text = useSelector((state) => state.menuReducer.text);
  const menuDetails = useSelector((state) => state.menuReducer.menuDetails);
  const dispatch = useDispatch();
  const [popUp, setPopUp] = useState(null);

  const openModal = () => {
    setPopUp({ popUp });
  };
  const closeModal = () => {
    setPopUp();
  };
  return (
  <div className="part_menu">
      {menuDetails
        .filter((el) => el.menuName.toLowerCase().includes(text))
        .map((el) => (
          <MenuCard
            id={el.id}
            menuName={el.menuName}
            price={el.price}
            img={el.img}
            qtn={el.qtn}
            menuDesc= {el.menuDesc}
          />
        ))}
    </div>
  );
};
export default MenuDetails;
