import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseItem,
  decreaseItem,
  totalCart,
  addItem
} from "../JS/actions/shopping-cartAction";
import { getProfile } from "../JS/actions/userAction";
const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  const [total, setTotal] = useState();

  const subTot = () => {
    if (Number(cartItems.reduce((a, b) => a + b.price * b.qtn, 0)) === 0) {
      setTotal(0);
    } else
      setTotal(Number( cartItems.reduce((a, b) => a + b.price * b.qtn, 0))+5);
  };
  useEffect(() => {
    subTot()
  }, [cartItems]);
  useEffect(() => {
    dispatch(getProfile())
  }, []);

  return (
    <div className="cart">
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
      <div className="cart_details">
      {cartItems.map((el) => (
        <div className="cart_details_part1" key={el.id}>
            <div className="cart_detail">
            <img className="img_cart" src={el.img} alt="cart" />
            <div className="cart_details_p">
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
                onClick={() => {
                  el.qtn === 1
                    ? dispatch(removeItem(el.id))
                    : dispatch(decreaseItem(el));
                }}
              ></i>
            </div>
            <button
              className="btn_cart"
              onClick={() =>
                dispatch(removeItem(el.id))}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
          <hr />
        </div>
      ))}
      <div className="cart_details_part2">
        <div className="cart_details_part2_title"><h4>Total</h4></div>
        <div>
          <h5>
            {" "}
            {Number(cartItems.reduce((a, b) => a + b.price * b.qtn, 0))} dt
          </h5>
          <h5>Frais de livraison : 5 dt</h5>
          <h5>
            Prix à payer :{" "}
            {total} dt
          </h5>
          <button
            className="btn2_cart"
            onClick={() => {props.history.push("/order");
              dispatch(totalCart(total),getProfile())}}
          >
            <b>Commander</b>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Cart;
