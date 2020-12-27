import React from 'react';
import { useDispatch } from "react-redux";
import { logout } from "../JS/actions/userAction";
import { Link } from "react-router-dom";

const ProfileUser = (props) => {
    const dispatch = useDispatch();
    
    return (
        <div  className= {props.open?"p":"none"}>
            <div >
            <div>
                <h5>Voir profil</h5>
            </div>
            <div>
            {JSON.parse(localStorage.getItem("token") === null) ? (
              <h5 className="headerItem">
                <Link
                  style={{ textDecoration: "none", color: "#B48B47" }}
                  to="/login"
                >
                    Se connecter 
                </Link>
              </h5>
            ) : (
              <h5 className="headerItem">
                <Link
                  style={{ textDecoration: "none", color: "#B48B47" }}
                  to="/"
                  onClick={() => dispatch(logout())}
                >
                  Se déconnecter
                  
                </Link>
              </h5>
            )}
            </div>
            </div>
        
        </div>
    )
}

export default ProfileUser
