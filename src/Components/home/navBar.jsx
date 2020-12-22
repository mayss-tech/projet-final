import React from "react";
import logo from "../images/logos.png";
import { useDispatch } from "react-redux";
import { logout } from "../JS/actions/userAction";
import { Route, withRouter, Link } from "react-router-dom";
import Pannier from "../restaurant/Pannier";

const NavBar = (props) => {
  const dispatch = useDispatch();

  return (
    <Route>
      <div className="bar">
        <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div>
            <p className="headerItem" onClick={() => props.history.push("/")}>
              <i className="fas fa-home"></i> 
            </p>
          </div>
        <div>
          <Pannier/>
        </div>
        <div className="bar_p">
          
          <div>
            {JSON.parse(localStorage.getItem("token") === null) ? (
              <p className="headerItem">
                <Link
                  style={{ textDecoration: "none", color: "#B48B47" }}
                  to="/login"
                >
                  <i className="fas fa-user-alt"></i> <b> Se connecter </b>
                </Link>
              </p>
            ) : (
              <p className="headerItem">
                <Link
                  style={{ textDecoration: "none", color: "#B48B47" }}
                  to="/"
                  onClick={() => dispatch(logout())}
                >
                  <i className="fas fa-user-alt"></i> <b>Se déconnecter</b>
                </Link>
              </p>
            )}
          </div>
          <div>
          <p className="headerItem"><i className="fas fa-comments"></i><b>Contacter-nous</b></p>
          </div>
        </div>
      </div>
    </Route>
  );
};
export default withRouter(NavBar);
