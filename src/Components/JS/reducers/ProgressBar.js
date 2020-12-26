import { NEXT_STEP } from "../constants/action-types";
 const initialState= {
stepper:0
}
const progressBar=(state=initialState,{type,payload})=>{
switch(type){
    case NEXT_STEP:
        return{
        ...state,
        stepper:payload
        };
        default :return state;
}
}
export default progressBar;