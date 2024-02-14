// SignUpField.js
import React, { useState } from 'react';

function SignUpField({ id, label, type, placeholder, isPassword, onPasswordChange }) {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
    if (isPassword) {
      onPasswordChange(id, event.target.value);
    }
  };

  return (
    <div>
      <label htmlFor={id} className="InputLabel">
        <input
          type={type}
          id={id}
          className="InputField"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}

export default SignUpField;
