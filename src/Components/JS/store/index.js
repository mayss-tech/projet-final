import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from '../reducers';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
        // restaurants:JSON.parse(localStorage.getItem("restaurants" || "[]")),
        // cartItems:JSON.parse(localStorage.getItem("cartItems" || "[]")),
        // menus: JSON.parse(localStorage.getItem("menus" || "[]"))
    }
    
const store = createStore(
    combineReducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)), 
);
export default store;
