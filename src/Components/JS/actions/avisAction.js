import { ADD_AVIS, EDIT_AVIS, REMOVE_AVIS } from "../constants/action-types";


export const addAvis =(newAvis)=>({
        type: ADD_AVIS,
        payload:newAvis
}
);
export const removeAvis =(id)=>({  
        type: REMOVE_AVIS,
        payload:id
});


export const editAvis=(id)=>(dispatch,getState)=>{
    dispatch({
        type: EDIT_AVIS,
        payload:id
    })
    localStorage.setItem("avis", JSON.stringify(getState().AvisReducer.avis))
};