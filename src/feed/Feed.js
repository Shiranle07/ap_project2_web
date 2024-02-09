import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginLogo from '../loginPage/loginLogo/LoginLogo';

function Feed({ userData }) {

    if (!userData.Email) {
        return(<div>
            <LoginLogo/>
            You must log in first
            <Link to="/">click here to log in</Link>
        </div>);
    }
    
    return (
        <div>
            Hello {userData.FirstName} {userData.LastName}!
            <div>
                Welcome to fakebook!
            </div>
            Photo: <img src={userData.ProfilePhoto} alt="Profile"></img>
        </div>
    );
}

export default Feed;
