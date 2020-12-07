import React,{useState} from 'react'
import { addItem } from "../JS/actions/shopping-cartAction";
import PopUp from "./PopUp";
import {useDispatch ,useSelector } from "react-redux";

const MenuDetails = () => {
    const z = useSelector((state) => state.menuReducer.text);
    const y= useSelector((state) => state.menuReducer.menuDetails );
    const dispatch = useDispatch();
    const [popUp, setPopUp] = useState(null);

    const openModal = () => {
      setPopUp({ popUp });
    };
    const closeModal = () => {
      setPopUp();
    };
    return (
    
    <div className="part_menu">
        { 
         y.filter(el=>el.menuName.toLowerCase().includes(z)).map((el) => (
            <div className="menu" key={el.id}>
              <div onClick={() => openModal(popUp)}>
                <img className="imgmenu" src={el.img} alt="resto" />
                <div className="menu_p">
                  <h3>{el.menuName}</h3>
                  <h5>{el.price} dt </h5>
                </div> 
              </div>
              <button
                className="btn_menu"
                onClick={() => dispatch(addItem(el))}
              >
                <b>Ajouter au panier</b><i className="fas fa-cart-plus"></i>
              </button>
              {popUp && (
              <PopUp isOpen={true} closeModal={closeModal} resto = {el}/>)}
        </div>
          ))} 
    </div> )
}
export default MenuDetails
