import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Carousel from './Components/home/carousel';
import NavBar from './Components/home/navBar';
import Home from './Components/home/homePage';
import Login from './Components/loginUser/loginUser';
import Register from './Components/loginUser/registerUser';
import Profile from './Components/loginUser/profileUser';
import RestoList from './Components/restaurant/restaurantList';
import MenuList from './Components/restaurant/menuList';
import Cart from './Components/shoppingCart/cart';
import Order from './Components/shoppingCart/order';
import ProfileAdmin from './Components/loginUser/ProfileAdmin';
function App() {
  return (<BrowserRouter>
    
    <Route exact path="/" component={()=> <Carousel/>} />
    <NavBar/>
    <Route exact path="/" component={()=> <Home /> } />
    <Route exact path='/inscription' component={(props)=> < Register {...props} />}/>
    <Route exact path="/login" component={ (props)=>< Login {...props}/> }/>
    <Route exact path='/profile' component={ (props)=><Profile {...props}/> }/>
    <Route exact path='/resto/restoList' component={(props)=>  <RestoList {...props}  />}/>
    <Route exact path='/menuList/:id' component={(props)=>  <MenuList {...props} />}/>
    <Route exact path='/cartItems' component={(props)=>  <Cart {...props} />}/>
    <Route exact path='/order' component={(props)=>  <Order {...props} />}/>
    <Route exact path='/admin' component={()=>  <ProfileAdmin  />}/>
    </BrowserRouter> );
}

export default App;
