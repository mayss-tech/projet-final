import React, { useEffect } from "react";
import {
  fetchRestaurantBeginAsync,
  ratingResto,
  searchRestaurant,
} from "../JS/actions/restaurantAction";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Rate from "./rate";
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
    <div className="header">
      <div className="search">
        <input
          type="text"
          placeholder="Chercher restaurant..."
          onChange={(e) => dispatch(searchRestaurant(e.target.value))}
        />
        <i className="fas fa-search"></i>
      </div>
      {restaurants
        .filter((el) => el.name.toLowerCase().includes(text))
        .map((el) => (
          <div className="restoList" key={el.id}>
            <img className="imgResto" src={el.image} alt="menu" />
            <div className="desc">
              <h4>{el.name}</h4>
              <p>{el.desc}</p>
            </div>
            <Rate
              idReso={el.id}
              rating={el.rate.reduce((a, b) => a + b,0) / el.rate.length}
            />
            <div>
              <button
                className="btn_resto"
                onClick={(e) => {e.preventDefault();
                  props.history.push("/menuList/" + el._id);
                }}
              >
                Voir menu
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default withRouter(RestoList);
