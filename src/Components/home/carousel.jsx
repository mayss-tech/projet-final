import React, { useState } from "react";

const Carousel = () => {
  const [Photo, setPhoto] = useState([
    "https://expertphotography.com/wp-content/uploads/2018/07/dark-food-photography-still-life.jpg",
    "https://format-com-cld-res.cloudinary.com/image/private/s--3lZKmA3v--/c_crop,h_579,w_1500,x_0,y_421/c_fill,g_center,h_440,w_1140/fl_keep_iptc.progressive,q_95/v1/3166de8c85cdf32962078bab48f68692/ramen-1.jpg",

    " https://www.photoblog.com/learn/wp-content/uploads/2019/02/Dark-and-Moody-Shots-2-2.jpg",
  ]);

  const [Currentvalue, setCurrentvalue] = useState(2);

  setTimeout(() => {
    next();
  }, 10000);
  // const prev = () => {
  //   if (Currentvalue == 0) {
  //     setCurrentvalue(Photo.length - 1);
  //   } else {
  //     setCurrentvalue(Currentvalue - 1);
  //   }
  // };
  const next = () => {
    if (Currentvalue == Photo.length - 1) {
      setCurrentvalue(0);
    } else {
      setCurrentvalue(Currentvalue + 1);
    }
  };
  return (
    <div>
      <div>
        <h5
          style={{
            position: "absolute",
            top: "70vh",
            marginLeft: "30vw",
            color: "#B98E47",
            fontSize: "30px"
          }}
        >
          Créer votre compte et commandez vos repas
        </h5>
      </div>
      <img className="carousel" src={Photo[Currentvalue]} alt="" />
    </div>
  );
};
export default Carousel;
