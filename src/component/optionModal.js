import React, { useState } from "react";
import "./optionModal.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

function OptionModal({ pickedOption }) {
  const [showPickedOption, setPickoption] = useState({
    openModal: undefined,
    selectedOption: "",
  });

  const pickRandomOption = () => {
    const randomPick = Math.floor(Math.random() * pickedOption.options.length);
    if (pickedOption.options.length > 0) {
      let random = pickedOption.options[randomPick];
      setPickoption(() => ({
        openModal: true,
        selectedOption: random,
      }));
    }
  };
  const closeModal = () => {
    setPickoption(() => ({
      openModal: false,
    }));
  };

  return (
    <div className="optionModal">
      <Modal
        isOpen={showPickedOption.openModal}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
        closeTimeoutMS={200}
        className="modal-content"
      >
        <h3 className="modal__title">selected option</h3>
        {showPickedOption.selectedOption && (
          <p className="modal__text">{showPickedOption.selectedOption}</p>
        )}
        <button onClick={closeModal} className="button">
          Close
        </button>
      </Modal>

      <h1 onClick={pickRandomOption}>What should I do?</h1>
    </div>
  );
}

export default OptionModal;
