import { 
    FETCH_MENU_BEGIN,
    FETCH_MENU_SUCCESS,
    FETCH_MENU_FAILURE,
    ADD_MENU_BEGIN,
    ADD_NEW_MENU,
    ADD_MENU_FAILURE,
    REMOVE_ADMIN_ITEM,
    SEARCH_MENU
    } from '../constants/action-types';

const initialState = {
    menus:[],
    loading: false,
    error: null,
    menuDetails :null,
    text:''
};
const menuReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case FETCH_MENU_BEGIN:
        return {
            ...state,
            loading:true
        };
    case FETCH_MENU_SUCCESS:
        return {
            ...state,
            menuDetails :payload,
            loading:false,
        };
    case FETCH_MENU_FAILURE:
        return {
            ...state,
            loading:false,
            error:payload
        };
    case SEARCH_MENU:
        return{
            ...state,
            text:payload
        }
    case ADD_MENU_BEGIN:
        return {
            ...state,
            loading:true
        };
    case ADD_NEW_MENU:
            return{
                ...state,
                menus:[...state.menus,payload]   
            }
    case ADD_MENU_FAILURE:
        return {
            ...state,
            loading:false,
            error:payload
        }
    case REMOVE_ADMIN_ITEM:
        return{
            ...state,
            menus: state.menus.filter(el=>el.id !== payload)
        }
    default:
        return state;
    }
};
export default menuReducer;