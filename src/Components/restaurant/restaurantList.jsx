import React, { useEffect } from "react";
import {
  fetchRestaurantBeginAsync,
  searchRestaurant,
} from "../JS/actions/restaurantAction";
import { useDispatch, useSelector } from "react-redux";
import Bar from "../Bar/Bar";
import AffRestaurant from "./AffRestaurant";
const RestoList = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.restoReducer.loading);
  const error = useSelector((state) => state.restoReducer.error);
  const text = useSelector((state) => state.restoReducer.text);

  useEffect(() => {
    dispatch(fetchRestaurantBeginAsync());
  }, []);
  return loading ? (
    <img
      src="https://www.mid-day.com/Resources/midday/images/loader.gif"
      style={{ width: "100%", height: "100vh" }}
      alt="gif"
    />
  ) : error ? (
    <h1 style={{ marginTop: "15%", marginLeft: "40%" }}>404 Not Found</h1>
  ) : (
    <div>
    <div >
      <Bar/>
    </div>
    <div style={{display:"flex"}}>
    <div className="search">
        <input
          type="text"
          placeholder="Chercher restaurant..."
          onChange={(e) => dispatch(searchRestaurant(e.target.value))}
        />
        <i className="fas fa-search"></i>
    </div>
     <div style={{marginTop:"40vh"}}>
       <AffRestaurant/>
    </div></div>
  </div>);
};
export default RestoList;
