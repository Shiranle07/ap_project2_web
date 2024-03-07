import LoginPage from './loginPage/LoginPage';
import './App.css';
import LoginLogo from './loginPage/loginLogo/LoginLogo';
import React, { useState, useRef } from 'react';
import SignUp from './signUp/Signup';
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import Feed from './feed/Feed';
import posts from "./data/db.json";
import ProfilePage from './profilePage/ProfilePage';

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



  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage userData={userData} setUserData={setUserData} />}></Route>

            <Route path="/tokens" element={<LoginPage userData={userData} setUserData={setUserData} />}></Route>

            <Route path="/users" element={<SignUp userData={userData} setUserData={setUserData} />}></Route>

            <Route path="/feed" element={<Feed userData={userData} postsList={postsList} setPostsList={setPostsList}/>}></Route>

            <Route path="/users/:id" element={<ProfilePage user={userData}/>}></Route>
            <Route path="/users/:id/posts" element={<ProfilePage user={userData}/>}></Route>
            <Route path="/users/:id/friends" element={<ProfilePage user={userData}/>}></Route>


          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
