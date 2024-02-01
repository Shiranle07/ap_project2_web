import React from 'react';
import './SignUp.css';
import logo from './logo.svg';
import SignUpField from './signUpField/SignUpField';

function SignUp() {
  const fields = [
    { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Full Name' },
    { id: 'userName', label: 'User Name', type: 'text', placeholder: 'User Name' },
    { id: 'email', label: 'Email', type: 'text', placeholder: 'Email' },
    { id: 'password', label: 'Password', type: 'password', placeholder: 'Password' },
    { id: 'passwordVerify', label: 'Password Verify', type: 'password', placeholder: 'Password Verify' },
    { id: 'profilePicture', label: 'Profile Picture', type: 'file', placeholder: 'Upload Profile Picture' },
  ];

  return (
    <div className="SignUp">
      <header className="SignUp-title">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Logo-title">Fakebook</p>
        <p className="Logo-title">We are better than Mark</p>
        <p className="LargeText">SignUp</p>

        {fields.map((field) => (
          <SignUpField key={field.id} {...field} />
        ))}

        <button>
            <p className="SignUpButton">SignUp</p>
        </button>

        <a
          className="SignUp-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn 
        </a>    
      </header>
    </div>
  );
}

export default SignUp;
