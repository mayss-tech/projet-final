import {NEXT_STEP} from "../constants/action-types"

export const nextStep =( nbr)=>(dispatch)=>{
    dispatch({
        type: NEXT_STEP,
        payload:nbr
    })
}