import React from "react";
import Modal from "react-modal";
const PopUp = ({ isOpen, closeModal, resto }) => {
return (
    <div>
        <Modal isOpen={true} onRequestClose={closeModal}>
        <div>
            <img src= {resto.img} alt="img"/>
            <h3>{resto.menuName}</h3>
            <p>{resto.desc}</p>
            <p>{resto.price} dt </p>

    <button onClick={() => closeModal({ popUp: null })}>
            <i className="fas fa-times"></i>
            </button>
        </div>
        </Modal>
    </div>
);
};

export default PopUp;
