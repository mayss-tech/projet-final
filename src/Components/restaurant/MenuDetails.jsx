import React from "react";
import { useSelector } from "react-redux";
import MenuCard from "./MenuCard";

const MenuDetails = () => {
  const text = useSelector((state) => state.menuReducer.text);
  const menuDetails = useSelector((state) => state.menuReducer.menuDetails);
  return (
    <div className="part_menu">
      {menuDetails.menuDetails
        .filter((el) => el.menuName.toLowerCase().includes(text))
        .map((el) => (
          <MenuCard
            nameResto={menuDetails.name}
            id={el._id}
            menuName={el.menuName}
            price={el.price}
            img={el.img}
            qtn={el.qtn}
            menuDesc={el.menuDesc}
          />
        ))}
    </div>
  );
};
export default MenuDetails;
