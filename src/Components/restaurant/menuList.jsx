import React, { useEffect, useState } from "react";
import { fetchMenuAsync, searchMenu } from "../JS/actions/menuAction";
import { useDispatch, useSelector } from "react-redux";
import MenuDetails from "./MenuDetails";
const MenuList = (props) => {
  const y= useSelector((state) => state.menuReducer.menuDetails );
  const x = useSelector((state) => state.restoReducer.restaurants);
  const loading = useSelector((state) => state.menuReducer.loading);
  const error = useSelector((state) => state.menuReducer.error);
  const cartItems= useSelector((state) => state.cartReducer.cartItems); 
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchMenuAsync(x.filter(el=>el._id===props.match.params.id)));
  },[x]);

  return (loading && (y ===null))? (
    <img
      src="https://www.mid-day.com/Resources/midday/images/loader.gif"
      style={{ width: "100%", height: "100vh" }}
      alt="gif"
    />
  ) : 
  error ? (
    <h1 style={{ marginTop: "15%", marginLeft: "40%" }}> 404 Not Found </h1>
  ) : (<div style={{display:"flex"}}>
    {y!==null ? <MenuDetails/> : [] }
      <div className="shopping-cart">
      <div  className="search_menu">
        <input type="text" 
        placeholder="Chercher menu..."
      onChange={(e)=>dispatch(searchMenu(e.target.value)) }/>
    <div className="i_menu"> <i className="fas fa-search "></i></div> 
      </div>
        <h3 onClick={() => props.history.push("/cartItems")}> Panier</h3>
        <div className="tot_cart">
          <i className="fas fa-shopping-cart "></i>
          <p className="pannier">{cartItems.length}</p>
        </div>
      </div>
    
      </div>
);
};
export default MenuList;
