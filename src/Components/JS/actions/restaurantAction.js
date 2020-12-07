import axios from 'axios';
import { 
    FETCH_RESTAURANT_BEGIN,
    FETCH_RESTAURANT_SUCCESS,
    FETCH_RESTAURANT_FAILURE,
    ADD_RESTAURANT_BEGIN,
    ADD_NEW_RESTAURANT,
    ADD_RESTAURANT_FAILURE,
    SEARCH_RESTAURANT
    } from '../constants/action-types';

export const fetchRestaurantBeginAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_RESTAURANT_BEGIN,
    });
    try {
        const restaurants = await axios.get('/dataRestaurant/restaurantList');
        dispatch({
            type:FETCH_RESTAURANT_SUCCESS ,
            payload: restaurants.data,
        })
    }catch (error){
        dispatch({
            type: FETCH_RESTAURANT_FAILURE,
        });
}};

export const searchRestaurant = (text)=>(dispatch)=>{
    dispatch({
        type:SEARCH_RESTAURANT,
        payload:text
    })
}
export const addNewRestaurant=(newResto)=>async (dispatch,getState)=>{
    dispatch({
        type: ADD_RESTAURANT_BEGIN,
    });
    try {
        const restaurants = await axios.post('/dataRestaurant/restaurantList',newResto);
        dispatch({
            type:ADD_NEW_RESTAURANT,
            payload :restaurants.data
        })
    } catch (error) {
        dispatch({
            type: ADD_RESTAURANT_FAILURE
        })
    }
    localStorage.setItem("restaurants",JSON.stringify(getState().restoReducer.restaurants));
}