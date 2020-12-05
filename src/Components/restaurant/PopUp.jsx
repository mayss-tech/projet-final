import React from "react";
import Modal from "react-modal";
const PopUp = ({ isOpen, closeModal, resto }) => {
  return (
    <div>
      <Modal isOpen={true} onRequestClose={closeModal}>
        <div style={{ display: "flex" }}>
          <img
            src={resto.img}
            style={{
              height: "50vh",
              width: "30vw",
              marginRight: "2vw",
              marginTop: "8vh",
            }}
            alt="img"
          />
          <div style={{ maxWidth: "30vw", marginTop: "18vh" }}>
            <h3>{resto.menuName}</h3>
            <h5 style={{ marginBottom: "5vh" }}>{resto.menuDesc}</h5>
            <h4> Prix: {resto.price} dt </h4>
          </div>
          <div style={{ marginLeft: "28vw", marginTop: "0vh" }}>
            <button onClick={() => closeModal({ popUp: null })}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PopUp;