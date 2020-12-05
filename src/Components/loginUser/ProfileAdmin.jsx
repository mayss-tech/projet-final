import React, { useState} from "react";
import { useDispatch ,useSelector } from "react-redux";
import {addNewRestaurant} from "../JS/actions/restaurantAction";
import {addNewMenu} from '../JS/actions/menuAction';


const ProfileAdmin = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [rate, setRate] = useState(0);

  const [img, setImg] = useState("");
  const [menuName, setMenuName] = useState("");
  const [menuDesc, setMenuDesc] = useState("");
  const [price, setPrice] = useState("");
  const [qtn, setQtn] = useState("");
  const restaurants = useSelector((state) => state.restoReducer.restaurants);

  const user = useSelector((state) => state.userReducer.user);
  const menus = useSelector((state) => state.menuReducer.menus);
  const dispatch = useDispatch();
    const addResto=()=>{
    dispatch(addNewRestaurant({
      idUser:user._id,
      image: image,
      name: name,
      desc: desc,
      rate: rate
    }))}

    const addMenu=()=>{
      dispatch(addNewMenu({
          idUser:user._id,
          img: img,
          menuName: menuName,
          menuDesc: menuDesc,
          price: price,
          qtn: qtn
      }))
    
      // useEffect(() => {
      //     dispatch(menu_details(
      //     user.idRestaurant
      //    ))
      // });

    }
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
            setImage(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Nom du restaurant"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Rate"
            onChange={(e) => {
              setRate(e.target.value);
            }}
          />
          <button
            onClick={() =>{addResto()}}
          >
            +
          </button>
        </fieldset>
{restaurants.filter(el=>el.idUser===user._id).map(el=><div key={el.id}>
  <h4>{el.name}</h4>

</div>)}
        <fieldset>
          <legend>Ajouter votre menu</legend>
          <input
            type="text"
            placeholder="Url du menu"
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Nom du menu"
            onChange={(e) => {
              setMenuName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setMenuDesc(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Prix"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Qtn"
            onChange={(e) => {
              setQtn(e.target.value);
            }}
          />
          <button onClick={()=>{addMenu()}}
          >
            +
          </button >
        </fieldset>
        {menus.map((el) => (
            <div>
              <h3>{el.menuName}</h3>
            </div>))}
      </div>
    </div>
  );
};
export default ProfileAdmin;
