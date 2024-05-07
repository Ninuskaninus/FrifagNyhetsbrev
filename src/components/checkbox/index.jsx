import React from "react";
import "./index.styles.css";

export default function Checkbox({ text, htmlFor, name, id, value, onCheckboxChange }) {
    const handleChange = (e) => {
    if (onCheckboxChange) {
      onCheckboxChange(e.target.id);
    }
  };

  return (
    <div className="checkboxContainer">
      <p>{text}</p>
      <label className="slider-container" htmlFor={htmlFor} name={name}>
        <input type="checkbox"
          className="hidden"
          name={name}
          id={id}
          value={value}
          onChange={handleChange}
        />
        <span className="slider slider_round"></span>
      </label>
    </div>
  );
}
