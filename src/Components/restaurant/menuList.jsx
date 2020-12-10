import React, {useEffect} from "react";
import { fetchMenuAsync, searchMenu} from "../JS/actions/menuAction";
import {
  fetchRestaurantBeginAsync,
} from "../JS/actions/restaurantAction";
import { useDispatch, useSelector } from "react-redux";
import MenuDetails from "./MenuDetails";
const MenuList = (props) => {
  const menuDetails= useSelector((state) => state.menuReducer.menuDetails);
  const loading = useSelector((state) => state.menuReducer.loading);
  const error = useSelector((state) => state.menuReducer.error);
  const cartItems= useSelector((state) => state.cartReducer.cartItems); 
  const dispatch = useDispatch();


  useEffect(() => {
      dispatch(fetchMenuAsync(props.match.params.id));
  },[]);
  useEffect(() => {
    dispatch(fetchRestaurantBeginAsync(props.match.params.id))
  }, []);
  return (menuDetails===null || loading) ? (
    <img
      src="https://www.mid-day.com/Resources/midday/images/loader.gif"
      style={{ width: "100%", height: "100vh" }}
      alt="gif"
    />
  ) : 
  error ? (
    <h1 style={{ marginTop: "15%", marginLeft: "40%" }}> 404 Not Found </h1>
  ) : (<div className="menu_part1">

      <div className="shopping-cart">
        <div className="search_menu">
        <input type="text" 
        placeholder="Chercher menu..."
      onChange={(e)=>dispatch(searchMenu(e.target.value)) }/>
      <div className="i_menu"> <i className="fas fa-search "></i></div> 
        </div>
        <div className="tot_cart">
        <h3 onClick={() => props.history.push("/cartItems")}> Panier</h3>
          <i className="fas fa-shopping-cart "></i>
          <p className="pannier" >{cartItems.length}</p>
        </div>
      </div>
      <MenuDetails/>
      </div>
);
};
export default MenuList;
