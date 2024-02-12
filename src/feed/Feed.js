import { useNavigate } from 'react-router-dom';
import './Feed.css'
import {React, useState} from 'react';
import TopNavbar from './topNavbar/TopNavbar';
import LeftMenu from './leftMenu/LeftMenu';
import profilePhoto from "../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import CreatePostField from './createPost/createPostField/CreatePostField';
import CreatePostWindow from './createPost/createPostWindow/CreatePostWindow';



function Feed({ userData }) {

    // if (!userData.IsLogIn) {
    //     return(<div>
    //         <LoginLogo/>
    //         You must log in first
    //         <Link to="/">click here to log in</Link>
    //     </div>);
    // }
    
    return (
        <div>
            <TopNavbar userData={userData}/>
            <div className='row'>
                <div className='col-3'>
                    <LeftMenu userData={userData}/>
                </div>
                <div className='col-6'>
                    <CreatePostField userData={userData}/>
                </div>
            </div>
            <CreatePostWindow userData={userData}/>
        </div>

        
    );
}

export default Feed;
