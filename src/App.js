import LoginPage from './loginPage/LoginPage';
import './App.css';
import LoginLogo from './loginPage/loginLogo/LoginLogo';
import React, { useState, useRef } from 'react';
import SignUp from './signUp/Signup';

function App() {

  const [isSignUp, setIsSignUp] = useState(false);
  const userDataRef = useRef({
    "First name": '',
    "Last name": '',
    "Email": '',
    "Password": '',
    "Profile photo": './signUp/profilePhotoField/defaultProfilePhoto.jpg'
  });


  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    console.log(userDataRef.current)
  };


  return (
    <div>
        {isSignUp ? (
        <SignUp toggleForm={toggleForm} userDataRef={userDataRef} />
      ) : (
        <LoginPage toggleForm={toggleForm} userData={userDataRef.current} />
      )}
        <LoginLogo/>
    </div>
  );
}

export default App;
