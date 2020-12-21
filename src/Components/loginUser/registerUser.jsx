import React from "react";
import img5 from "../images/inscri2.PNG";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../JS/actions/userAction.js";
const Register = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [codePostal, setCodePostal] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    dispatch(
      register({
        name,
        telephone,
        email,
        password,
        adress,
        codePostal,
      })
    );
  };
  return (
    <div className="block1">
      {loading ? (
        <img
          src="https://www.mid-day.com/Resources/midday/images/loader.gif"
          style={{ width: "100%", height: "100vh" }}
          alt="gif"
        />
      ) : user ? (
        <Redirect to="/login" />
      ) : (
        <div className="register">
          <p className="p1"> Prenez quelques minutes pour vous inscrire</p>

          <div className="re_m">
            <span>🧑‍</span>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text "
              placeholder="nom et prénom"
            />
          </div>

          <div className="re_m">
            <span>☎️</span>
            <input
              onChange={(e) => setTelephone(e.target.value)}
              type="text"
              placeholder="numéro de téléphone"
            />
          </div>

          <div className="re_m">
            <span>📧</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="e-mail"
            />
          </div>

          <div className="re_m">
            <span>***</span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="mot de passe"
            />
          </div>

          <div className="re_m">
            <span> 🏠</span>
            <input
              onChange={(e) => setAdress(e.target.value)}
              type="text"
              placeholder="adresse"
            />
          </div>

          <div className="re_m">
            <span>🏣</span>
            <input
              onChange={(e) => setCodePostal(e.target.value)}
              type="text"
              placeholder="code postale"
            />
          </div>

          <button className="btn2" onClick={addUser}>
            <b>Créer votre compte</b>
          </button>
        </div>
      )}
      <div>
        <img className="img5" src={img5} alt="img5" />
      </div>
    </div>
  );
};
export default Register;
