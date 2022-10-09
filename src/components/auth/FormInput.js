import { useState } from "react";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="form-Item">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirmPass" && setFocused(true)}
        focused={focused.toString()}
      />
      <span className="sw">Username should be 3-16 characters and shouldn't include any special character!</span>
      <span className="error">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
