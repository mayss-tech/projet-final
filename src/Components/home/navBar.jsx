import React from 'react';
import logo from '../images/logos.png';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../JS/actions/userAction';
import { Route, withRouter,Link } from 'react-router-dom';

const NavBar = (props) => {
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const dispatch = useDispatch();

    return ( <Route>
    <div className="bar">
        <img  className="logo" src={logo} alt="logo" ></img>    
        <p onClick={()=>props.history.push('/')} ><i className="fas fa-home"></i> <b>Home</b></p>
        
        { isAuth ?
        <i><p><Link to="/" onClick={()=>dispatch(logout())}>Se déconnecter</Link></p></i> : 
        <i><p><Link to="/login">Se connecter</Link></p></i> }

        <p onClick={()=>props.history.push('/contact')} ><i className="fas fa-comment-dots"></i><b>Contactez-nous</b></p>
    </div> 
    </Route> )}
export default withRouter( NavBar) ;