import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa';
const Rate = () => {
    const [rating, setRating]=useState(null);
    return ( <div >
{[...Array(5)].map((x,y)=>{ const ratingValue=y+1; 
        
            return <label key={Math.random()}><input 
            type="radio"
            name="rating" 
            value={ratingValue} className="rate" 
            onClick={()=>setRating(ratingValue)}></input>
            < FaStar className="fa-star" color={ratingValue <= rating?"#C29638":"#747474"}/>
{/* <i className="fas fa-star" color={ratingValue <= rating?"#3d83df":"#747474"} >  </i> */}
        </label> } 
            ) } 
    </div> );
}
export default Rate;