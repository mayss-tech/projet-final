import React, { useEffect, useState } from "react";
import { fetchMenuAsync } from "../JS/actions/menuAction";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../JS/actions/shopping-cartAction";
import PopUp from "./PopUp";

const MenuList = (props) => {
  const menus= useSelector((state) => state.menuReducer.menus);

  const loading = useSelector((state) => state.menuReducer.loading);
  const error = useSelector((state) => state.menuReducer.error);
  const cartItems= useSelector((state) => state.cartReducer.cartItems); 
  const dispatch = useDispatch();
  const [menuDetails,setMenuDetails]=useState([])
  // useEffect(() => {
  //   dispatch(fetchMenuAsync());
  // },[]);

   useEffect(() => {
    setMenuDetails (menus.filter(el=>el._id===props.match.params.id))
   }, [menus]);

  const [popUp, setPopUp] = useState(null);

  const openModal = () => {
    setPopUp({ popUp });
  };
  const closeModal = () => {
    setPopUp();
  };
  return loading ? (
    <img
      src="https://www.mid-day.com/Resources/midday/images/loader.gif"
      style={{ width: "100%", height: "100vh" }}
      alt="gif"
    />
  ) : error ? (
    <h1 style={{ marginTop: "15%", marginLeft: "40%" }}> 404 Not Found </h1>
  ) : (
    <div>
      <div className="shopping-cart">
        <h3 onClick={() => props.history.push("/cartItems")}> Panier</h3>
        <div className="tot_cart">
          <i className="fas fa-shopping-cart"></i>
          <p className="pannier">{cartItems.length}</p>
        </div>
      </div>
      <div className="part_menu">
              {menus.map((el) => (
            <div className="menu" key={el.id}>
              <div onClick={() => openModal(popUp)}>
                <img className="imgmenu" src={el.img} alt="image" />
                <div className="menu_p">
                  <h3>{el.menuName}</h3>
                  <h5>{el.price} dt </h5>
                </div>
              </div>
              <button
                className="btn_menu"
                onClick={() => dispatch(addItem(el))}
              >
                <b>Ajouter au panier</b> <i className="fas fa-cart-plus"></i>
              </button>
              {popUp && (
          <PopUp isOpen={true} closeModal={closeModal} resto = {el}/>)}
        </div>
          ))}
      </div>
    </div>
  );
};
export default MenuList;