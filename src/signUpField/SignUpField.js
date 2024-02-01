import React from 'react';

function SignUpField({ id, label, type, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="InputLabel">
        <input type={type} id={id} className="InputField" placeholder={placeholder} />
      </label>
    </div>
  );
}

export default SignUpField;
