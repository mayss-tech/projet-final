import { ADD_AVIS, EDIT_AVIS, REMOVE_AVIS, TOGGEL_AVIS } from "../constants/action-types"


const initialState={
avis:[],
isEdited: false

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
        case TOGGEL_AVIS:
            return {
              ...state,
              avis: state.avis.map((el) =>
                el.id === payload ? { ...el, isEdited: !el.isEdited } : el
              ),
            };
          case EDIT_AVIS:
            return {
              ...state,
              avis: state.avis.map((el) => (el.id === payload.id ? payload : el)),
            };
    default:
        return state
}};
export default AvisReducer;