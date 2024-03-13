import LoginPage from './loginPage/LoginPage';
import './App.css';
import LoginLogo from './loginPage/loginLogo/LoginLogo';
import React, { useState, useRef, useEffect } from 'react';
import SignUp from './signUp/Signup';
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import Feed from './feed/Feed';
import posts from "./data/db.json";
import ProfilePage from './profilePage/ProfilePage';

function App() {
  // const [postsList, setPostsList] = useState(posts);
  const [postsList, setPostsList] = useState();
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

  async function getPosts() {
    const data = await fetch("http://localhost:8080/api/posts",{
        'headers': {
            'Content-Type': 'application/json',
            // 'authorization': 'bearer ' + token // attach the token
            },
    })
    const posts = await data.json()
    console.log("Posts:", posts)
    setPostsList(posts)
}
useEffect(() => {
  getPosts();
},[])


  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Feed postsList={postsList} setPostsList={setPostsList} getPosts={getPosts}/>}></Route>

            <Route path="/tokens" element={<LoginPage userData={userData} setUserData={setUserData} />}></Route>

            <Route path="/users" element={<SignUp userData={userData} setUserData={setUserData} />}></Route>

            <Route path="/posts" element={<Feed postsList={postsList} setPostsList={setPostsList} getPosts={getPosts}/>}></Route>

            <Route path="/users/:id" element={<ProfilePage user={userData}/>}></Route>
            <Route path="/users/:id/posts" element={<ProfilePage user={userData}/>}></Route>
            <Route path="/users/:id/friends" element={<ProfilePage user={userData}/>}></Route>


          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
