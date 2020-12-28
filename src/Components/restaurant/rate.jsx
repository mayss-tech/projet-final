import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {FaStar} from 'react-icons/fa';
import { rate } from '../JS/actions/restaurantAction';
const Rate = (props) => {
    const starRate =props.rating;
    const [rating, setRating]=useState ();
    const dispatch = useDispatch();
    console.log("rating",rating)
    return ( <div className={starRate}>
{[...Array(5)].map((x,y)=>{ const ratingValue=y+1 
            return <label key={Math.random()}>
            <input 
            type="radio"
            name="rating" 
            value={ratingValue} 
            className="rate" 
            onClick={()=>dispatch(rate(setRating(ratingValue))) 
                }
            />
            < FaStar className="fa-star" color={ratingValue<=rating?"#B98E47":"#474747"}/>
        </label> } 
            ) } 
    </div> );
}

export default Rate;