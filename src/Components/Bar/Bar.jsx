import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";

const Bar = () => {
  const stepper = useSelector((state) => state.progressBar.stepper);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const [affNameResto,setAffNameResto]=useState("Restaurant")
  useEffect(() => {
   let menu =JSON.parse(localStorage.getItem('menuListX'))
    if(menu!==null) 
   {setAffNameResto(menu.name)} 
   else{setAffNameResto("Restaurant")} 
  }, []);
  return (
    <div className="translateBar">
      <progress value={stepper} max="60" />
      <div
        className={`${
          stepper <= 60 ? "circle_color_active" : "circle_color_nonActive"
        } circle_bar step1 `}
      >
        <i className={stepper >= 20 ? "fas fa-check" : "none"}></i>
      
          
          <p>{affNameResto}</p>
        
      </div>
      <div
        className={`${
          stepper >= 20 ? "circle_color_active" : "circle_color_nonActive"
        }  circle_bar step2`}
      >
        <i
          className={
            stepper >= 20 && cartItems.length !== 0 ? "fas fa-check" : "none"
          }
        ></i>
        <p>Menu</p>
      </div>
      <div
        className={`${
          stepper >= 40 ? "circle_color_active" : "circle_color_nonActive"
        } circle_bar step3`}
      >
        <i className={stepper >=40  ? "fas fa-check" : "none"}></i>
        <p>Commander</p>
      </div>
      <div
        className={`${
          stepper === 60 ? "circle_color_active" : "circle_color_nonActive"
        } circle_bar step4`}
      >
        <i className={stepper === 60 ? "fas fa-check" : "none"}></i>
        <p>Confirmer</p>
      </div>
      
    </div>
  );
};

export default Bar;
