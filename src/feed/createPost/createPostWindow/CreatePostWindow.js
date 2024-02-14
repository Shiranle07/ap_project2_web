import "./CreatePostWindow.css"
import profilePhoto from "../../../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import PostAdditionals from './PostAdditionals';
import {React, useState} from 'react';

function CreatePostWindow({userData}){
    const [postContent, setPostContent] = useState('');
    const [isPostDisabled, setIsPostDisabled] = useState(true);

    const handlePostContentChange = (event) => {
        const content = event.target.value;
        setPostContent(content);
        // Enable or disable the post button based on whether content is present
        setIsPostDisabled(content.trim() === '');
    };

    return(
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-center flex-grow-1" id="exampleModalToggleLabel">Create post</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex align-items-center">
                        <img src={userData.ProfilePhoto ? userData.ProfilePhoto : profilePhoto} alt="profile" width="40" height="40" class="d-inline-block align-text-center profile-photo mr-2" id="display-user"></img>
                        <p class="fw-bolder m-0">
                            {userData.FirstName} {userData.LastName}
                        </p>
                    </div>
                    <form>
                        <textarea className="form-control mt-3" id="postContent" placeholder={`What's on your mind, ${userData.FirstName}?`} onChange={handlePostContentChange}></textarea>
                    </form> 
                    <div className='card mt-3 post-additionals'>
                        <div className='row card-body p-2'>
                            <div className="col d-flex align-items-center">
                                Add to your post
                            </div>
                            <div className="col-auto d-flex align-items-center">
                                <PostAdditionals iconClass={"btn bi bi-images post-option add"} text={"Photo/video"} id={"photo"}/>
                                <PostAdditionals iconClass={"btn bi bi-person-fill-add add"} text={"Tag people"} id={"people"}/>
                                <PostAdditionals iconClass={"btn bi bi-emoji-laughing post-option add"} text={"Feeling/activity"} id={"emoji"}/>
                                <PostAdditionals iconClass={"btn bi bi-geo-alt-fill add"} text={"Check in"} id={"location"}/>
                                <PostAdditionals iconClass={"btn bi bi-filetype-gif add"} text={"GIF"} id={"gif"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-center">
                    <button class="btn btn-primary w-100 new-post-btn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" disabled={isPostDisabled}>Post</button>
                </div>
            </div>
        </div>
    </div>   
    );
}
export default CreatePostWindow;