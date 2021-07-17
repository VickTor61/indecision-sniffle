import React, { useEffect, useState } from "react";
import Action from "./Action";
import AddOption from "./AddOption";
import Option from "./Option";
import "./form.css";
import ErrorMessage from "./errorMessage";
import OptionModal from "./optionModal";

function Form() {
  const [errorHandler, setErrorhandler] = useState(undefined);

  const initializeState = () => ({
    options: JSON.parse(localStorage.getItem("options")) || [],
  });
  const [listItems, setListItems] = useState(initializeState());

  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(listItems.options));
  }, [listItems.options]);

  const handleAddoption = (option) => {
    if (!option) {
      return setErrorhandler("Enter valid value to add item");
    } else if (listItems.options.indexOf(option) > -1) {
      return setErrorhandler("This option already exists!");
    }
    setListItems((prevState) => ({
      ...prevState,
      options: prevState.options.concat(option),
    }));
  };

  const removeAll = () => setListItems({ options: [] });

  const handleDeleteOption = (option) => {
    setListItems((prevState) => ({
      options: prevState.options.filter((options) => options !== option),
    }));
  };
  const removeErrorhandler = () => {
    setErrorhandler("");
  };

  return (
    <div className="form">
      <OptionModal pickedOption={listItems} />
      <ErrorMessage
        errorHandler={errorHandler}
        removeErrorhandler={removeErrorhandler}
      />
      <div className="component-2">
        <span className="f-options">
          <h3>Your Options</h3>
          <Action
            handleRemoveAll={removeAll}
            isDisabled={!listItems.options.length > 0}
            options={listItems}
          />
        </span>
        <div className="component-3">
          {listItems.options.length === 0 && (
            <h3 className="showmessage">List is empty add an item!</h3>
          )}
          <div className="form-border">
            {listItems.options.map((option) => (
              <Option
                key={option}
                optionText={option}
                handleDeleteOption={handleDeleteOption}
              />
            ))}
          </div>
          <div className="form">
            <AddOption validateOption={handleAddoption} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
