import React from "react";
import "./LabelInput.scss";

function LabelInput({ label, id, isMandatory, error, name, ...props }) {
  return (
    <div className="LabelInput">
      <label htmlFor={id} data-mandatory={isMandatory}>
        {label}
      </label>
      <input
        className="FancyInput"
        type="text"
        id={id}
        {...props}
        name={name}
      />
      {error && error !== " " ? (
        <span className="LabelInput__error">{error}</span>
      ) : null}
    </div>
  );
}

export default LabelInput;
