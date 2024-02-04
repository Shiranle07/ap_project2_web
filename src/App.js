import LoginPage from './loginPage/LoginPage';
import './App.css';
import LoginLogo from './loginPage/loginLogo/LoginLogo';
import { useState } from 'react';
import React from 'react';
import DarkMode from './darkMode/DarkMode';
import SignUp from './loginPage/signUp/Signup';

function App() {

  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
        {isSignUp ? (
        <SignUp toggleForm={toggleForm} />
      ) : (
        <LoginPage toggleForm={toggleForm} />
      )}
        <LoginLogo/>
        <DarkMode />

    </div>
  );
}

export default App;
