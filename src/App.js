import LoginPage from './loginPage/LoginPage';
import './App.css';
import LoginLogo from './loginPage/loginLogo/LoginLogo';
import React, { useState, useRef } from 'react';
import SignUp from './signUp/Signup';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Feed from './feed/Feed';
import posts from "./data/db.json"

function App() {
  const [postsList, setPostsList] = useState(posts);
  const [isSignUp, setIsSignUp] = useState(true);
  const [userData, setUserData] = useState({
    "FirstName" : '',
    "LastName" : '',
    "Email" : '',
    "Password" : '',
    "ProfilePhoto" : null,
    "IsLogIn" : false
  });
  console.log(userData)

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };


  return (
    <div>
        <BrowserRouter>
          <Routes>
            {isSignUp ? (
                    <Route path="/" element={<LoginPage toggleForm={toggleForm} userData={userData} setUserData={setUserData} />}></Route>) : (
                    <Route path="/" element={<SignUp toggleForm={toggleForm} userData={userData} setUserData={setUserData} />}></Route>)}

            <Route path="/feed" element={<Feed userData={userData} postsList={postsList} setPostsList={setPostsList}/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
