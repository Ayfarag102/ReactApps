import React from "react";
import "./styles.scss";

const FormInput = ({ handleChange, label, ...data }) => {
  return (
    <div className="formRow">
      {label && <label>{label}</label>}

      <input className="formRow__input" onChange={handleChange} {...data} />
    </div>
  );
};

export default FormInput;
