import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem,addProduct,removeItem } from "../JS/actions/shopping-cartAction";
import { useSelector } from "react-redux";
const ProfileAdmin = () => {
  const [Title, setTitle] = useState("");
  const [Url, setUrl] = useState("");
  const [Description, setDescription] = useState("");
  const [rate, setRate] = useState(0);
  const dispatch = useDispatch();
  const cartItems= useSelector((state) => state.cartReducer.cartItems); 
  return (
    <div style={{ marginTop: "20%" }}>
       
      <input
        type="text"
        placeholder="Url"
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button 
      onClick={()=>dispatch(addProduct({id:Date.now(), url:Url,title:Title,description:Description})
    )
        }
      >
        +
      </button>

      {cartItems.map(el=><div key={el.id}>
          <img  src={el.url} alt="url" />
          <p>{el.title}</p>
      <p>{el.description}</p>
      <button onClick={()=>dispatch(removeItem (el.id))}>supprimer</button>
      </div>)}
    </div>
  );
};

export default ProfileAdmin;
