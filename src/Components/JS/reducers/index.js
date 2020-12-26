import { combineReducers } from 'redux';
import userReducer from './userReducer';
import restoReducer from './restaurantReducer';
import menuReducer from './menuReducer';
import cartReducer from './shopping-cartReducer';
import progressBar from './ProgressBar';
export default combineReducers({
    userReducer, restoReducer, menuReducer, cartReducer,progressBar
});
