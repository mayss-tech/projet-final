import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from '../reducers';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
        // cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]
    qtn:0
    }
    
const store = createStore(
    combineReducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)), 
);
export default store;
