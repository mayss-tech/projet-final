import { 
    FETCH_MENU_BEGIN,
    FETCH_MENU_SUCCESS,
    FETCH_MENU_FAILURE,
    ADD_ITEM
    } from '../constants/action-types';

const initialState = {
    menus: [],
    loading: false,
    error: null
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
            menus:payload,
            loading:false,
        };
    case FETCH_MENU_FAILURE:
        return {
            ...state,
            loading:false,
            error:payload
        };
    case ADD_ITEM : 
    const item = payload;
    const isExist = state.menus.find(el=>el.id===item.id)
    if(isExist){
            return {
            ...state,
            menus : state.menus.map(el=>el.id===isExist.id?el:item)
            }
    }else{
            return{
            ...state,
            menus:[...state.menus,item]   
            }
        }
    default:
        return state;
    }
};
export default menuReducer;