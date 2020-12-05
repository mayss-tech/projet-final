import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseItem,
  decreaseItem
} from "../JS/actions/shopping-cartAction";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "20%" }}>
      <div className="shopping-cart cart_header">
        {cartItems.length === 0 ? (
          <div className="cart_p">
            <p>Votre pannier est vide</p>
          </div>
        ) : (
          <div className="cart_p">
            <p>
              Votre panier contient {cartItems.length} achats{" "}
              <i className="fas fa-utensils"></i>
            </p>{" "}
          </div>
        )}
      </div>
      {cartItems.map((el) => (
        <div className="cart" key={el._id}>
          <div className="cart_detail">
            <img className="img_cart" src={el.img} alt="image" />
            <div className="title_cart">
              <h5>{el.menuName}</h5>
              <h5>{el.price} dt </h5>
            </div>
            <div className="inc_dec">
              <i
                className="fas fa-plus"
                onClick={() => dispatch(increaseItem(el))}
              ></i>
              <h4>{el.qtn} </h4>
              <i
                className="fas fa-minus"
                onClick={() => dispatch(decreaseItem(el))}
              ></i>
            </div>
            <button
              className="btn1_cart"
              onClick={() => dispatch(removeItem(el._id))}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
          <hr />
        </div>
      ))}
      <div className="total_cart">
        <h4>Total</h4>
        <div className="tot">
          <h5>
            {" "}
            {Number(cartItems.reduce((a, b) => a + b.price * b.qtn, 0))} dt
          </h5>
          <h5>Frais de livraison : 5 dt</h5>
          <h5>
            Prix à payer :{" "}
            {Number(cartItems.reduce((a, b) => a + b.price * b.qtn + 5, 0))} dt
          </h5>
          <button
            className="btn2_cart"
            onClick={() => props.history.push("/order")}
          >
            <b>Commander</b>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
