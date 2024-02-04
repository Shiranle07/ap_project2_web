
// SignUp.js
import React, { useState } from 'react';
import './SignUp.css';
import logo from './logo.svg';
import SignUpField from './signUpField/SignUpField';

function SignUp() {
  const fields = [
    { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Full Name' },
    { id: 'userName', label: 'User Name', type: 'text', placeholder: 'User Name' },
    { id: 'email', label: 'Email', type: 'text', placeholder: 'Email' },
    { id: 'birth', label: 'Birth', type: 'date', placeholder: 'Birth'},
    { id: 'password', label: 'Password', type: 'password', placeholder: 'Password' },
    { id: 'passwordVerify', label: 'Password Verify', type: 'password', placeholder: 'Password Verify' },
    { id: 'profilePicture', label: 'Profile Picture', type: 'file', placeholder: 'Upload Profile Picture' },
  ];

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (fieldId, fieldValue) => {
    if (fieldId === 'password') {
      setPassword(fieldValue);
    } else if (fieldId === 'passwordVerify') {
      setConfirmPassword(fieldValue);
      setPasswordsMatch(fieldValue === password);
    }
  };


  const handleSubmit = () => {
    // Your form submission logic here
    if (passwordsMatch) {
      console.log('Passwords match! Submit the form.');
      // Additional form submission logic can go here
    } else {
      console.log('Passwords do not match. Display an error message or prevent form submission.');
      // You might want to display an error message or prevent form submission
    }
  };


  return (

    <div className="SignUp">
      <header className="SignUp-title">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Logo-title">Fakebook</p>
        <p className="Logo-title">We are better than Mark</p>
        <p className="LargeText">SignUp</p>

        {fields
          .filter((field) => field.id !== 'profilePicture')
          .map((field) => (
            <SignUpField
              key={field.id}
              {...field}
              isPassword={['password', 'passwordVerify'].includes(field.id)}
              onPasswordChange={handlePasswordChange}
              
            />
          ))}

        
        {/* Display an error message if passwords do not match */}
        {!passwordsMatch && <p className="PasswordCheck">Passwords do not match.</p>}

        {/* Display a message if passwords match */}
        {passwordsMatch && <p className="PasswordCheck">Passwords match!</p>}
        <p className="PasswordCheck">Upload profile picture:</p>

        {/* Render the profile picture field separately */}
        {fields
          .filter((field) => field.id === 'profilePicture')
          .map((field) => (
            <SignUpField
              key={field.id}
              {...field}
              isPassword={['password', 'passwordVerify'].includes(field.id)}
              onPasswordChange={handlePasswordChange}
            />
          ))}
                  <p className="PasswordCheck"> </p>

          <div className="row justify-content-center align-items-center">
            <div class="col-md-11">
                <div class="form-check btn-group align-items-center col-4" role="group">
                    <label class="form-check-label btn btn-outline-secondary gender-btn" for="gridRadios1">
                    Male
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"></input>
                    </label>
                </div>
                <div class="form-check btn-group align-items-center col-4" role="group">
                    <label class="form-check-label btn btn-outline-secondary gender-btn" for="gridRadios2">
                    Female
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                    </label>
                </div>
                <div class="form-check btn-group align-items-center col-4" role="group">
                    <label class="form-check-label btn btn-outline-secondary gender-btn" for="gridRadios3">
                    Other
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"></input>
                    </label>
                </div>
            </div>
        </div>

        <div class="form-check">
         <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
         <label class="form-check-label" for="flexCheckIndeterminate">
         I agree to the terms
         </label>
        </div>


        <button type="button" class="SignUpButton">SignUp</button>
        
        

      </header>
    </div>
  );
}

export default SignUp;
