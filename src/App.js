import LoginPage from './loginPage/LoginPage';
import './App.css';
import LoginLogo from './loginPage/loginLogo/LoginLogo';
import React, { useState, useRef } from 'react';
import SignUp from './signUp/Signup';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Feed from './feed/Feed';

function App() {

  const [isSignUp, setIsSignUp] = useState(true);
  const userDataRef = useRef({
    FirstName : '',
    LastName : '',
    Email : '',
    Password : '',
    ProfilePhoto : './signUp/profilePhotoField/defaultProfilePhoto.jpg'
  });


  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
        <BrowserRouter>
          <Routes>
            {isSignUp ? (
                    <Route path="/" element={<LoginPage toggleForm={toggleForm} userData={userDataRef.current} />}></Route>) : (
                    <Route path="/" element={<SignUp toggleForm={toggleForm} userDataRef={userDataRef} />}></Route>)}

            <Route path="/feed" element={<Feed userData={userDataRef.current}/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
