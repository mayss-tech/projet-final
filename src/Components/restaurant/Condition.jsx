import React,{useState,useEffect} from 'react';
import PanierContainer from './PanierContainer';
import{useDispatch, useSelector} from "react-redux";
const Condition = ({nameResto}) => {
    const [exist, setExist]=useState("")
    // useEffect(() => {
    //     let cart =JSON.parse(localStorage.getItem('cart'))
        
    //      if( (cart.filter(el=>el.nameResto ===  nameResto ) )) 
    //     {setExist("its ok ")} 
    //     else{setExist("nn ")} 
    //    }, []);
    // const cartItems = useSelector((state) => state.cartReducer.cartItems);
    return (
        <div>
                
     {exist}

        </div>
    )
}

export default Condition
