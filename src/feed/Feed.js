import { useNavigate } from 'react-router-dom';
import './Feed.css'
import {React, useState} from 'react';
import TopNavbar from './topNavbar/TopNavbar';
import LeftMenu from './leftMenu/LeftMenu';
import profilePhoto from "../signUp/profilePhotoField/defaultProfilePhoto.jpg";



function Feed({ userData }) {

    const [postContent, setPostContent] = useState('');
    const [isPostDisabled, setIsPostDisabled] = useState(true);

    const handlePostContentChange = (event) => {
        const content = event.target.value;
        setPostContent(content);
        // Enable or disable the post button based on whether content is present
        setIsPostDisabled(content.trim() === '');
    };

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
                    <div class="card mt-2">
                        <div class="card-body">
                        <img src={profilePhoto} alt="profile" width="40" height="40" class="d-inline-block align-text-center profile-photo " id="display-user"></img>
                        <button className='col-11 post-input' data-bs-target="#exampleModalToggle" data-bs-toggle="modal">{`What's on your mind, ${userData.FirstName}?`}</button>
                        <hr></hr>
                        <button type="button" className='nav-item btn btn-outline post-btn col-4'>
                        <i class="bi bi-camera-video-fill post-option" id="live"></i>
                        Live video
                        </button>
                        <button type="button" className='nav-item btn btn-outline post-btn col-4'>
                        <i class="bi bi-images post-option" id="photo"></i>
                        Photo/video
                        </button>
                        <button type="button" className='nav-item btn btn-outline post-btn col-4'>
                        <i class="bi bi-emoji-laughing post-option" id="emoji"></i>
                        Feeling/activity
                        </button>

                    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-center flex-grow-1" id="exampleModalToggleLabel">Create post</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                            <img src={profilePhoto} alt="profile" width="40" height="40" class="d-inline-block align-text-center profile-photo " id="display-user"></img>
                                {userData.FirstName} {userData.LastName}
                            </div>
                            <form>
                            <textarea className="form-control mt-3" rows="10" placeholder={`What's on your mind, ${userData.FirstName}?`} onChange={handlePostContentChange}></textarea>
                            </form>
                            
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" disabled={isPostDisabled}>Post</button>
                        </div>
                        </div>
                    </div>  
                    </div>

                        </div>
                    </div>
                </div>
            </div>




            
        </div>

        
    );
}

export default Feed;
