import React, { useEffect } from "react";
import {
  fetchRestaurantBeginAsync,
  searchRestaurant,
} from "../JS/actions/restaurantAction";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Bar from "../Bar/Bar";
const RestoList = (props) => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restoReducer.restaurants);
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
    <div className="header"  style={{marginTop:'11%'}}>
      <div className="search">
        <input
          type="text"
          placeholder="Chercher restaurant..."
          onChange={(e) => dispatch(searchRestaurant(e.target.value))}
        />
        <i className="fas fa-search"></i>
      </div>
      <div style={{display:'block'}}>
      <div >
      <Bar/>
      </div>
     <div>
      {restaurants
        
        .map((el) => (
          <div className="restoList" key={el.id}>
            <img className="imgResto" src={el.image} alt="imgRestaurant" />
            <div className="desc">
              <h4>{el.name}</h4>
              <p>{el.desc}</p>
            </div>
            <div>
              <button
                className="btn_resto"
                onClick={() => {
                  props.history.push("/menuList/" + el._id);
                }}
              >
                Voir menu
              </button>
            </div>
          </div>
        ))}</div></div>
    </div>
  );
};
export default withRouter(RestoList);
