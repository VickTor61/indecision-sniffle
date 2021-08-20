import React from "react";
import "./option.css";

function Option({ optionText, handleDeleteOption }) {
  console.log("option", optionText)
  return (
    <div className="option">
      <p className="option-text">
      {optionText}
        </p>
      <span onClick={() => handleDeleteOption(optionText)}>remove</span>
    </div>
  );
}

export default Option;
