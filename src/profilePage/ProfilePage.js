import { Link, useLocation, useParams, useNavigate  } from "react-router-dom";
import TopNavbar from "../feed/topNavbar/TopNavbar";
import './ProfilePage.css'
import React, { useState, useEffect } from 'react';
import EditUserWindow from "./EditUserWindow";
import DeleteUserModal from "./DeleteUserModal";
import PostCard from "../feed/postCard/PostCard";
import MyProfile from "./MyProfile";
import UserProfile from "./UserProfile";


function ProfilePage(){
    const { userEmail, section } = useParams();
    const [userPostsList, setUserPostsList] = useState([]);
    const [userFriendsList, setUserFriendsList] = useState([]);
    const [activeButton, setActiveButton] = useState(section || 'About');
    const navigate = useNavigate();
    const location = useLocation();
    const token = location.state.token;
    const user = location.state.user;
    const status = location.state.status;
    const loggedUser = location.state.loggedUser;
    console.log("the logged in user from profile", loggedUser)
    const [activeFriendsButton, setActiveFriendsButton] = useState(status);
    console.log("the user here:", token)

    // useEffect(() => {
    //     getUserPosts();
    // }, []);    

    const handleInfo = (buttonName) => {
        setActiveButton(buttonName);
    };

    async function handlePosts(buttonName){
        setActiveButton(buttonName);
        await getUserPosts();
    }

    async function getUserPosts() {
        console.log("asking:", token)
        const res = await fetch(`http://localhost:8080/api/users/${user.email}/posts`, {
            headers: {
                "Content-Type": "application/json",
                'authorization': 'bearer ' + token // attach the token
            }
        });
        const usersPosts = await res.json();
        setUserPostsList(usersPosts.userPosts);
        console.log("posts:", userPostsList);
    }
    

    const getFriends = async (buttonName) => {
        setActiveButton(buttonName);
        const res = await fetch(`http://localhost:8080/api/users/${user.email}/friends`,{
            headers: {
                "Content-Type" : "application/json",
                'authorization': 'bearer ' + token // attach the token
            }
        });
        const usersFriends = await res.json();
        setUserFriendsList(usersFriends.friendsList);
    }

    const addFriend = async () => {
        const res = await fetch(`http://localhost:8080/api/users/${user.email}/friends`,{
            "method" : "POST",
            headers: {
                "Content-Type" : "application/json",
                'authorization': 'bearer ' + token // attach the token
            }
        })
        setActiveFriendsButton("Requested")
    }

    if(activeFriendsButton == "user"){
        return(
            <MyProfile loggedUser={loggedUser} user={user} token={token} handleInfo={handleInfo} handlePosts={handlePosts} getFriends={getFriends} activeButton={activeButton} userPostsList={userPostsList} userFriendsList={userFriendsList}/>
        )
    }

    else{
        return(
            <UserProfile loggedUser={loggedUser} user={user} token={token} handleInfo={handleInfo} handlePosts={handlePosts} getFriends={getFriends} activeButton={activeButton} userPostsList={userPostsList} userFriendsList={userFriendsList} activeFriendsButton={activeFriendsButton} addFriend={addFriend}/>
        )
    }




    
}


export default ProfilePage;