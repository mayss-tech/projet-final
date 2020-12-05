import {
    FETCH_RESTAURANT_BEGIN,
    FETCH_RESTAURANT_SUCCESS,
    FETCH_RESTAURANT_FAILURE,
    ADD_RESTAURANT_BEGIN,
    ADD_NEW_RESTAURANT, 
    ADD_RESTAURANT_FAILURE
    } from '../constants/action-types';

const initialState = {
    restaurants:[],
    loading: false,
    error: null
};
const restoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case FETCH_RESTAURANT_BEGIN:
        return {
            ...state,
            loading:true
        };
    case FETCH_RESTAURANT_SUCCESS:
        return {
            ...state,
            restaurants:payload,
            loading:false,
        };
    case FETCH_RESTAURANT_FAILURE:
        return {
            ...state,
            loading:false,
            error:payload
        };
        case ADD_RESTAURANT_BEGIN:
        return {
            ...state,
            loading:true
        };
        case ADD_NEW_RESTAURANT:
            return{
                ...state,
                loading:false,
                restaurants:[...state.restaurants,payload]
            }
        case ADD_RESTAURANT_FAILURE:
            return{
                ...state,
            loading:false,
            }
    default:
        return state;
    }
};
export default restoReducer;