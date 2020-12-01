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
        <p onClick={()=>props.history.push('/contact')} ><i className="fas fa-comment-dots"></i><b>Contactez-nous</b></p>
        { isAuth ?
        <p><b><Link to="/" className="p_bar" onClick={()=>dispatch(logout())}><i className="fas fa-user-alt"></i>Se déconnecter</Link></b></p> : 
        <p><b><Link className="p_bar" to="/login"><i className="fas fa-user-alt"></i>Se connecter</Link></b></p>}
    </div> 
    </Route> )}
export default withRouter( NavBar) ;