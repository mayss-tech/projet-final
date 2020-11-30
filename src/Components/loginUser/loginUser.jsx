import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {login} from '../JS/actions/userAction';
const Login = (props) => {
    const dispatch = useDispatch();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const loading = useSelector((state) => state.userReducer.loading);
    const loginUser = (e) => {
        e.preventDefault();
        dispatch(
        login({
            email,
            password,
        }))}

    return   localStorage.getItem('token') ?
    <Redirect to='/profile' />:  loading? (<img src="https://www.mid-day.com/Resources/midday/images/loader.gif" style={{width:'100%',height:'100vh'}}alt="gif"/>)
    :  (<div style={{marginTop:'60vh'}}>
        <p className="login">E-mail</p> 
        <input className="span1" 
        type="email"
        onChange={(e) => setEmail(e.target.value)}/><br/>
        
        <p >Mot de passe</p>
        <input className="span1" 
        type="password"
        onChange={(e) => setPassword(e.target.value)} /><br/>
    <button className="btn1" onClick={loginUser}><b>Connecter</b></button>
    <p onClick={()=>props.history.push('/inscription')}>Créer un compte</p> </div>)}
export default Login;