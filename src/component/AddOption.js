import React from "react";
import "./addoption.css";

function AddOption({ validateOption }) {
  const handleAddoption = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements[0].value.trim();
    validateOption(inputValue);
    e.target.elements[0].value = "";
  };

  return (
    <div className="addoption">
      <form onSubmit={handleAddoption}>
        <input type="text" name="list" />
        <button>Add Option</button>
      </form>
    </div>
  );
}

export default AddOption;
