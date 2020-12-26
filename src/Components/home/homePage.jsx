import React from "react";
import { withRouter } from "react-router-dom";
import homePic from '../images/home.PNG';
import { BrowserRouter as Router } from "react-router-dom";


const Home = () => {
  return (
    <Router>
      <div>
        <div >
          <img className="Pic"  src={homePic} alt="homePic"></img>
          </div>
        <div className="part_1">
          <div>
            <img
              className="home_img"
              src="https://previews.123rf.com/images/chekman/chekman1802/chekman180200017/94827433-ic%C3%B4ne-de-localisation-de-marqueur-dor%C3%A9-illustration-vectorielle-pointeur-de-carte-dor%C3%A9-isol%C3%A9-sur-fond-sombre-.jpg"
              alt="img1"
            />
            <p>
              Indiquez votre position
              <br />
              Livraison jour et nuit
              <br />à domicile et au bureau
            </p>
          </div>
          <div>
            <img
              className="home_img"
              src="https://i.pinimg.com/736x/21/6e/41/216e415824c35e1c7eab0a9a2485604b.jpg"
              alt="img2"
            />
            <p>
              Consultez et choisissez parmi
              <br />
              +100 restaurants à Sfax
            </p>
          </div>
          <div>
            <img
              className="home_img"
              src="https://www.capitaine-banque.com/wp-content/uploads/2016/08/carte-bancaire-haut-de-gamme.jpg"
              alt="img3"
            />
            <p>
              Payez à la livraison <br />
              Espèce, ticket resto, chèque
            </p>
          </div>
        </div>
    
      </div>
    </Router>
  );
};
export default withRouter(Home);
