import { useNavigate } from 'react-router-dom';
import './Feed.css'
import React from 'react';
import TopNavbar from './topNavbar/TopNavbar';


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
        </div>
    );
}

export default Feed;
