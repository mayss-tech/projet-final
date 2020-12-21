import React from 'react';
import {useSelector} from "react-redux";
const RestoMenu = () => {
    const menuDetails= useSelector((state) => state.menuReducer.menuDetails);

    return (
        <div style={{display:'flex',marginBottom:'10%'}}>  
            <img className="img_cart"  src={menuDetails.image}  alt="RestoMenu" ></img>
            <h5>  {menuDetails.name} </h5>
        </div>
    )
}
export default RestoMenu
