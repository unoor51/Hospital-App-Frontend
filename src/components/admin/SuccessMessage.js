import React from "react";

const SuccessMessage = ({ message }) => {
  return (
    <div className="row">
      <div className="alert alert-info alert-dismissible col-sm-12">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        {message}
      </div>
    </div>
  );
};

export default SuccessMessage;
