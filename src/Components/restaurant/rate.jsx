import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa';
import {ratingResto} from "../JS/actions/restaurantAction";
import {useDispatch, useSelector} from "react-redux";
const Rate = (props) => {
    const rate = useSelector((state) => state.restoReducer.rate);
    const starRate =props.rating;
    const [rating, setRating]=useState([]);
    const dispatch = useDispatch();
    const r =()=>{
        dispatch (ratingResto())
    }
    console.log(rate)
    return ( <div className={starRate}>
{[...Array(5)].map((x,y)=>{ const ratingValue=y+1;
            return <label key={Math.random()}>
            <input 
            type="radio"
            name="rating" 
            value={ratingValue} 
            className="rate" 
        onClick={()=>{r()}}
            />
            < FaStar className="fa-star" color={ratingValue<= rating?"#C29638":"#747474"  }/>

        </label> } 
            ) } 
    </div> );
}
export default Rate;