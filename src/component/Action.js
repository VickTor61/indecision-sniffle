import React from "react";

function Action({ handleRemoveAll, isDisabled }) {
  return (
    <div>
      <span
        disabled={isDisabled}
        onClick={handleRemoveAll}
        style={{ cursor: "pointer" }}
      >
        Remove All
      </span>
    </div>
  );
}

export default Action;
