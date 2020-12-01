import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {login} from '../JS/actions/userAction';
import img5 from '../images/inscri2.PNG'
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

    return  localStorage.getItem('token') ?
    <Redirect to='/profile' />:  loading? (<img src="https://www.mid-day.com/Resources/midday/images/loader.gif" style={{width:'100%',height:'100vh'}}alt="gif"/>)
    :  (<div className="block1 "><div  className="register  " >
        <div className="re_m login" > <span>📧</span>
        <input 
        type="email"
        placeholder="e-mail"
        onChange={(e) => setEmail(e.target.value)}/></div>
        
        <div className="re_m" ><span>***</span>
        <input 
        type="password"
        placeholder="mot de passe"
        onChange={(e) => setPassword(e.target.value)} /></div>
    <button className="btn1" onClick={loginUser}><b>Connecter</b></button>

    <b><p  className="p_login" onClick={()=>props.history.push('/inscription')}>Créer un compte</p></b>

    </div>
    <div>
    <img className="img5" src={img5} alt="img5"/>
    </div>
    </div>)
    }
    
export default Login;