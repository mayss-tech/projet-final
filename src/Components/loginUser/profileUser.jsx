import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../JS/actions/userAction.js";
import RestoList from "../restaurant/restaurantList";
import ProfileAdmin from "./ProfileAdmin.jsx";

const Profile = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return loading ? (
    <img
      src="https://www.mid-day.com/Resources/midday/images/loader.gif"
      style={{ width: "100%", height: "100vh" }}
      alt="gif"
    />
  ) : !isAuth ? (
    <Redirect to="/login" />
  ) : isAuth.role == "admin" ? (
    <div>
      <div className="admin">
        <h3>Bonjour !!</h3>
      </div>
      <ProfileAdmin />
    </div>
  ) : (
    <div className="profile_user">
      <div className="user">
        <p
          style={{ fontSize: "22px", marginLeft: "1.5vw", marginTop: "1.2vh" }}
        >profile
        </p>
      </div>
      <div style={{ marginTop: "25vh" }}>
      <RestoList />
      </div>
    </div>
  );
};
export default Profile;
