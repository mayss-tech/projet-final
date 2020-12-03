import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  addProduct,
  removeItem,
} from "../JS/actions/shopping-cartAction";
import { useSelector } from "react-redux";
import Rate from "../restaurant/rate";
const ProfileAdmin = () => {
  const [titleResto, setTitleResto] = useState("");
  const [titleMenu, setTitleMenu] = useState("");
  const [urlMenu, setUrlMenu] = useState("");
  const [urlResto, setUrlResto] = useState("");
  const [descriptionResto, setDescriptionResto] = useState("");
  const [descriptionMenu, setDescriptionMenu] = useState("");
  const [priceMenu, setPriceMenu] = useState("");
  const [qtnMenu, setQtnMenu] = useState("");
  const [rateResto, setRateResto] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  return (
    <div className="dashboard_pat1">
      <div className="dashboard_pat2">
        <p>Restaurant_détails</p>
        <p>Order</p>
      </div>
      <div className="dashboard_pat3">
        <fieldset>
          <legend>Ajouter votre restaurant </legend>
          <input
            type="text"
            placeholder="Url du restaurant"
            onChange={(e) => {
              setUrlResto(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Nom du restaurant"
            onChange={(e) => {
              setTitleResto(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setDescriptionResto(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Rate"
            onChange={(e) => {
              setRateResto(e.target.value);
            }}
          />
          <button
            onClick={() =>
              dispatch(
                addProduct({
                  id: Date.now(),
                  urlResto: urlResto,
                  titleResto: titleResto,
                  descriptionResto: descriptionResto,
                  rateResto: rateResto,
                })
              )
            }
          >
            +
          </button>
        </fieldset>

        {cartItems.map((el) => (
          <div key={el.id} className="new_Obj">
            <img src={el.urlResto} alt="url" />
            <p>{el.titleResto}</p>
            <p>{el.descriptionResto}</p>
            <Rate rating={el.rateResto} />
            <button onClick={() => dispatch(removeItem(el._id))}>
              supprimer
            </button>
          </div>
        ))}
        <fieldset>
          <legend>Ajouter votre menu</legend>
          <input
            type="text"
            placeholder="Url du menu"
            onChange={(e) => {
              setUrlMenu(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Nom du menu"
            onChange={(e) => {
              setTitleMenu(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setDescriptionMenu(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Prix"
            onChange={(e) => {
              setPriceMenu(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Qtn"
            onChange={(e) => {
              setQtnMenu(e.target.value);
            }}
          />
          <button
            onClick={() =>
              dispatch(
                addItem({
                  id: Date.now(),
                  urlMenu: urlMenu,
                  titleMenu: titleMenu,
                  descriptionMenu: descriptionMenu,
                  priceMenu: priceMenu,
                  qtnMenu: qtnMenu,
                })
              )
            }
          >
            +
          </button>
        </fieldset>
        {cartItems.map((el) => (
          <div key={el.id}className="new_Obj" >
            <img src={el.urlMenu} alt="url" />
            <p>{el.titleMenu}</p>
            <p>{el.descriptionMenu}</p>
            <p>{el.priceMenu} </p>
            <p>{el.qtnMenu} </p>
            <button onClick={() => dispatch(removeItem(el.id))}>
              supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProfileAdmin;
