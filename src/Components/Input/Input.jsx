import React from "react";

export default function Input({
  name,
  type,
  label,
  placeholder,
  value,
  options,
}) {
  if (options) {
    type = "select";
    options = options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
    // options[0].selected = true;
  }
  const InputType = type === "text" ? "input" : type;
  // console.log(name);
  label = label || capitalize(name);
  placeholder = placeholder || `Your ${name} here`;
  return (
    <div className="form-group">
      <label className="my-2" htmlFor={name}>
        {label}
      </label>
      <InputType
        type={type}
        className="form-control"
        name={name}
        id={name}
        aria-describedby={name}
        placeholder={placeholder}
        defaultValue={value}
      >
        {options}
      </InputType>
    </div>
  );
}
Input.defaultProps = {
  type: "text",
  value: "",
};

function capitalize(str) {
  if (str) return str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}
