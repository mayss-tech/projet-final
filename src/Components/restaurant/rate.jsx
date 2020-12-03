import React,{useState,useEffect} from 'react';
import {FaStar} from 'react-icons/fa';
const Rate = (props) => {
    const starRate =props.rating;
    const [rating, setRating]=useState([JSON.parse(localStorage.getItem("rate" || "[]"))]);
    
    useEffect(() => {
        localStorage.setItem("rate", JSON.stringify(rating))
    }, [rating]);

    return ( <div className={starRate}>
{[...Array(5)].map((x,y)=>{ const ratingValue=y+1; 
            return <label key={Math.random()}>
            <input 
            type="radio"
            name="rating" 
            value={ratingValue} 
            className="rate" 
            onClick={()=>setRating(ratingValue)}/>
            < FaStar className="fa-star" color={ratingValue <= rating?"#C29638":"#747474"}/>
        </label> } 
            ) } 
    </div> );
}
export default Rate;