import { Link, useParams  } from "react-router-dom";
import TopNavbar from "../feed/topNavbar/TopNavbar";
import profilePhoto from "../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import './ProfilePage.css'
import React, { useState } from 'react';


function ProfilePage({user}){
    const { id, section } = useParams();
    const [activeButton, setActiveButton] = useState(section || 'About');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (
        <div>
            <TopNavbar userData={user} />
            <div className="card user-card">
                <img src={user.ProfilePhoto ? user.profilePhoto : profilePhoto} alt="profile" width="200" height="200" className="d-inline-block align-text-center profile-photo mr-2" id="display-user" />
                <p className="fw-bolder m-0">
                    {user.FirstName} {user.LastName}
                </p>
                <hr />
                <div className="row">
                    <Link to={`/users/${id}`} className={`btn profile-options col-1 ${activeButton === 'About' ? 'active' : ''}`} onClick={() => handleButtonClick('About')}>About</Link>
                    <Link to={`/users/${id}/posts`} className={`btn profile-options col-1 ${activeButton === 'Posts' ? 'active' : ''}`} onClick={() => handleButtonClick('Posts')}>Posts</Link>
                    <Link to={`/users/${id}/friends`} className={`btn profile-options col-1 ${activeButton === 'Friends' ? 'active' : ''}`} onClick={() => handleButtonClick('Friends')}>Friends</Link>
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