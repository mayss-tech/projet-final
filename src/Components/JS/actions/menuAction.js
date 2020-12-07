import axios from 'axios';
import { 
    FETCH_MENU_BEGIN,
    FETCH_MENU_SUCCESS,
    FETCH_MENU_FAILURE,
    ADD_MENU_BEGIN,
    ADD_NEW_MENU,
    ADD_MENU_FAILURE,
    SEARCH_MENU
    } from '../constants/action-types';

export const fetchMenuAsync = (id) => async (dispatch) => {
    dispatch({
        type: FETCH_MENU_BEGIN,
    });
    try {
        const menuDetails = await axios.post('/dataRestaurant/restaurantDetails',{id:id});
        dispatch({
            type:FETCH_MENU_SUCCESS ,
            payload: menuDetails.data,
        })
    }catch (error){
        dispatch({
            type: FETCH_MENU_FAILURE,
            payload: error.response,
        });
}};

export const searchMenu = (text)=>(dispatch)=>{
    dispatch({
        type:SEARCH_MENU,
        payload:text
    })
}

export const addNewMenu =(newMenu)=> async (dispatch,getState)=>{
    dispatch({
        type:ADD_MENU_BEGIN,
    });
    try {
        const menus = await axios.post('/dataMenu/menuList',newMenu);
        dispatch({
            type:ADD_NEW_MENU,
            payload:menus.data,
        })
    } catch (error) {
        dispatch({
            type:ADD_MENU_FAILURE,
            payload: error.response,
        })
    }
    localStorage.setItem("menus",JSON.stringify(getState().menuReducer.menus))
}
