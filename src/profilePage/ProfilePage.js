import { Link, useLocation, useParams, useNavigate  } from "react-router-dom";
import TopNavbar from "../feed/topNavbar/TopNavbar";
import './ProfilePage.css'
import React, { useState, useEffect } from 'react';
import EditUserWindow from "./EditUserWindow";
import DeleteUserModal from "./DeleteUserModal";


function ProfilePage(){
    const { userEmail, section } = useParams();
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

    if(activeFriendsButton == "user"){
        return (
            <div>
                <TopNavbar userData={loggedUser} />
                <div className="card user-card">
                    <img src={user.profilePhoto} alt="profile" width="200" height="200" className="d-inline-block align-text-center profile-photo mr-2" id="display-user" />
                    <p className="fw-bolder m-0">
                        {user.firstName} {user.lastName}
                    </p>
                    <div className="editAndDelete d-flex align-items-center justify-content-end">
                        <button className="btn" data-bs-toggle="modal" data-bs-target={`#editUser-${user.email}`}>
                            <i class="bi bi-pencil editAndDelete-icon"></i>
                             </button>
                            <EditUserWindow/>
                        <button className="btn" data-bs-toggle="modal" data-bs-target={`#deleteUser-${user.email}`}>
                            <i class="bi bi-trash3 editAndDelete-icon"></i>
                            </button>
                            <DeleteUserModal/>
                        </div>
                    <hr />
                    <div className="row">
                        <Link to={`/users/${user.email}`} className={`btn profile-options col-1 ${activeButton === 'About' ? 'active' : ''}`} onClick={() => handleButtonClick('About')}>About</Link>
                        <Link to={`/users/${user.email}/posts`} className={`btn profile-options col-1 ${activeButton === 'Posts' ? 'active' : ''}`} onClick={() => getPosts('Posts')}>Posts</Link>
                        <Link to={`/users/${user.email}/friends`} className={`btn profile-options col-1 ${activeButton === 'Friends' ? 'active' : ''}`} onClick={() => getFriends('Friends')}>Friends</Link>
                        <Link className="btn profile-options col-1">Photos</Link>
                        <Link className="btn profile-options col-1">Videos</Link>
                        <Link className="btn profile-options col-1">Check-ins</Link>
                        <Link className="btn profile-options col-1">More</Link>
                    </div>
                </div>
    
                {activeButton === 'Posts' && (
                    <div className="row align-content-center justify-content-center">
                        <div className="card posts-card col-10">
                            <p className="fw-bolder m-0">
                                Posts
                            </p>
                        </div>
                    </div>
                )}
    
                {activeButton === 'Friends' && (
                    <div className="row align-content-center justify-content-center">
                        <div className="card posts-card col-10">
                            <p className="fw-bolder m-0">
                                Friends
                            </p>
                        </div>
                    </div>
                )}
            </div>
        );
    }


    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const getPosts = async (buttonName) => {
        setActiveButton(buttonName);
        console.log("asking:", token)
        const res = await fetch(`http://localhost:8080/api/users/${user.email}/posts`,{
            headers: {
                "Content-Type" : "application/json",
                'authorization': 'bearer ' + token // attach the token
            }
        })
        const user = await res.json();
        console.log("founded user:", user)

        // Now navigate to the specified URL
        //navigate(`/users/${user.email}/posts`, { state: { token: token, user: user } });
    }

    const getFriends = async (buttonName) => {
        setActiveButton(buttonName);
        const res = await fetch(`http://localhost:8080/api/users/${user.email}/friends`,{
            headers: {
                "Content-Type" : "application/json",
                'authorization': 'bearer ' + token // attach the token
            }
        })
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

    return (
        <div>
            <TopNavbar userData={loggedUser} />
            <div className="card user-card">
                <img src={user.profilePhoto} alt="profile" width="200" height="200" className="d-inline-block align-text-center profile-photo mr-2" id="display-user" />
                <p className="fw-bolder m-0">
                    {user.firstName} {user.lastName}
                </p>
                <div className="d-flex align-items-center justify-content-end"> 
                    {activeFriendsButton === 'Add friend' && (
                        <button className="btn col-2 friends-request btn-primary" onClick={addFriend}>
                            <i className="bi bi-person-fill-add ml-1"></i>
                            Add friend
                        </button>
                    )}
                    {activeFriendsButton === 'Requested' && (
                        <button className="btn col-2 friends-request btn-secondary" disabled>
                            <i className="bi bi-person-fill-check ml-1"></i>
                            Requested
                        </button>
                    )}
                    {activeFriendsButton === 'Confirm' && (
                        <button className="btn col-2 friends-request btn-secondary" disabled>
                            <i class="bi bi-check2-all ml-1"></i>
                            {user.firstName} sent you a friend request
                        </button>
                    )}
                    {activeFriendsButton === 'Friends' && (
                        <button className="btn col-2 friends-request btn-secondary">
                            <i className="bi bi-person-check-fill ml-1"></i>
                            Friends
                        </button>
                    )}
                </div>

                <hr />
                <div className="row">
                    <Link to={`/users/${user.email}`} className={`btn profile-options col-1 ${activeButton === 'About' ? 'active' : ''}`} onClick={() => handleButtonClick('About')}>About</Link>
                    <Link to={`/users/${user.email}/posts`} className={`btn profile-options col-1 ${activeButton === 'Posts' ? 'active' : ''}`} onClick={() => getPosts('Posts')}>Posts</Link>
                    <Link to={`/users/${user.email}/friends`} className={`btn profile-options col-1 ${activeButton === 'Friends' ? 'active' : ''}`} onClick={() => getFriends('Friends')}>Friends</Link>
                    <Link className="btn profile-options col-1">Photos</Link>
                    <Link className="btn profile-options col-1">Videos</Link>
                    <Link className="btn profile-options col-1">Check-ins</Link>
                    <Link className="btn profile-options col-1">More</Link>
                </div>
            </div>

            {activeButton === 'Posts' && (
                <div className="row align-content-center justify-content-center">
                    <div className="card posts-card col-10">
                        <p className="fw-bolder m-0">
                            Posts
                        </p>
                    </div>
                </div>
            )}

            {activeButton === 'Friends' && (
                <div className="row align-content-center justify-content-center">
                    <div className="card posts-card col-10">
                        <p className="fw-bolder m-0">
                            Friends
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}


export default ProfilePage;