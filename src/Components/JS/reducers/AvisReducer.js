import { ADD_AVIS, REMOVE_AVIS } from "../constants/action-types"


const initialState={
avis:[]
}
const AvisReducer =(state=initialState ,{ type,payload})=>{
switch(type){
    case ADD_AVIS : 
        return{
        ...state,
        avis:[...state.avis, {id: Date.now(),comment:payload}]   
        }
    case REMOVE_AVIS:
        return{
            ...state,
            avis: state.avis.filter(el=>el.id !== payload)
        }
    
    default:
        return state
}};
export default AvisReducer;