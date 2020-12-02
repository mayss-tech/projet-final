import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../JS/actions/userAction.js';
import RestoList from '../restaurant/restaurantList';

const Profile = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const user = useSelector((state) => state.userReducer.user);
    const loading = useSelector((state) => state.userReducer.loading);
    useEffect(() => {
    dispatch(getProfile(
    ));
    }, []); 
    return loading ? (
    <img src="https://www.mid-day.com/Resources/midday/images/loader.gif" style={{width:'100%',height:'100vh'}}alt="gif"/>
    ) : !isAuth ? (
    <Redirect to='/login' />
    ) : isAuth.role=="admin" ?( <Redirect to="/admin"/>) :(
    <div >
        <p style={{position:"absolute",fontSize:'18px', marginLeft:'85vw'}}> 
        Bon apétit {JSON.stringify(user.name)}</p>
        
        <div> <RestoList/> </div>
        </div>)}
export default Profile;