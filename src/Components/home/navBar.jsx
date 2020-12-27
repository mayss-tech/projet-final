import React,{useState} from "react";
import logo from "../images/logos.png";
import { Route, withRouter} from "react-router-dom";
import Pannier from "../restaurant/Pannier";
import ProfileUser from "../Profile/ProfileUser";

const NavBar = (props) => {
  
  const [open, setOpen]=useState(false);
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

        <div className="bar_p"  style={{display:"flex" }} >
        <i className="fas fa-user-alt"></i>
          <p><b>Mon compte</b> </p>
          <div onClick={
            ()=>{setOpen(!open)}
          }>
          <i className="fas fa-sort-down" ></i>
          </div>
       
        <div>
          <ProfileUser open={open}/>
        </div>
        
        </div>
       
           
          
          <div>
          <p className="headerItem"><i className="fas fa-comments"></i><b>Contacter-nous</b></p>
          </div>
        
      </div>
    </Route>
  );
};
export default withRouter(NavBar);
