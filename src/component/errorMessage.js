import React from "react";

function ErrorMessage({ errorHandler, removeErrorhandler }) {
  return (
    <div>
      {errorHandler && (
        <div className="error-wrapper" onClick={removeErrorhandler}>
          <p className="form-error">{errorHandler}</p>
        </div>
      )}
    </div>
  );
}

export default ErrorMessage;
