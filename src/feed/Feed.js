import { useNavigate } from 'react-router-dom';
import './Feed.css'
import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import TopNavbar from './topNavbar/TopNavbar';
import LeftMenu from './leftMenu/LeftMenu';
import RightMenu from './rightMenu/RightMenu';
import profilePhoto from "../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import CreatePostField from './createPost/createPostField/CreatePostField';
import CreatePostWindow from './createPost/createPostWindow/CreatePostWindow';
import LoginLogo from '../loginPage/loginLogo/LoginLogo';
import posts from "../data/db.json"
import PostCard from "./postCard/PostCard";





function Feed({ userData }) {
    const [postsList, setPostsList] = useState(posts);

    // if (!userData.IsLogIn) {
    //     return( 
    //         <div>
    //             <div className='form-box col-4 d-flex flex-column align-items-center justify-content-center'>
    //                 <h2 className='error-noLogIn'>
    //             You must log in first
    //             </h2>
    //             <Link to="/" style={{ display: 'block', textAlign: 'center', margin: '10px 0' }}>
    //                 <button className='btn btn-primary'>
    //                     Click here to log in
    //                 </button>
    //                 </Link>
    //             </div>
    //             <LoginLogo/>
    //         </div>
    //     );
    // }
    
    return (
        <div>
            <TopNavbar userData={userData}/>
            <div className='feed-container'>
                <div className='row'>
                    <div className='col-3 left-section'>
                        <LeftMenu userData={userData}/>
                    </div>
                    <div className='col-6 middle-section'>
                        <CreatePostField userData={userData}/>
                        <div className='post-list'>
                            {
                                postsList.map((post, index) => 
                                    <PostCard key={index} {...post} />
                                )
                            }
                        </div>
                    </div>
                    <div className='col-3 right-section'>
                        <RightMenu/>    
                    </div>
                </div>
            </div>
            
            <CreatePostWindow userData={userData} postsList={postsList} setPostsList={setPostsList}/>
            </div>
    );
}

export default Feed;
