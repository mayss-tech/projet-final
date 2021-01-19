import { ADD_AVIS, EDIT_AVIS, REMOVE_AVIS, TOGGEL_AVIS } from "../constants/action-types";


export const addAvis =(newAvis)=>({
        type: ADD_AVIS,
        payload:newAvis
}
);
export const removeAvis =(id)=>({  
        type: REMOVE_AVIS,
        payload:id
});


export const toggleTask = (id) => ({
    type: TOGGEL_AVIS,
    payload: id,
  });
  
  export const editTask = (payload) => ({
    type: EDIT_AVIS,
    payload,
  });