import profilePhoto from "../../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import "./PostCard.css"
import {React, useState} from 'react';

function PostCard({user_firstName, user_lastName, user_photo, postBody, postPhoto, likesNumber, commantsNumber, publication_date}){
    const [isLiked, setIsLiked] = useState(false); // State to track if button is liked

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    return(
        <div class="container mb-3">
        <div class="card">
            <div class="card-body">

                <div className="editAndDelete">
                    <button className="btn">
                        <i class="bi bi-pencil"></i> 
                    </button>
                    <button className="btn">
                    <i class="bi bi-trash3"></i>
                    </button>
                </div>
                <div class="d-flex align-items-center">
                            <img src={user_photo ? user_photo : profilePhoto} alt="profile" width="40" height="40" class="d-inline-block align-text-center profile-photo mr-2" id="display-user"></img>
                            <p class="fw-bolder m-0">
                                {user_firstName} {user_lastName}
                            </p>
                </div>
                <p class="card-subtitle mt-1 text-body-secondary post-date">{publication_date}</p>
                <br></br>
                <p class="card-text pt-2">{postBody}</p>
                {postPhoto && (
                    <div className="photo-window d-flex justify-content-center align-items-center">
                        <img src={postPhoto} alt="Photo" className="image" style={{ maxWidth: '100%', maxHeight: '500px', margin: 'auto' }}/>
                    </div>
                )}

                <div className="like-and-comment mt-2">
                <span class="card-link like-info">
                    <i class="bi bi-hand-thumbs-up-fill like-icon"></i>
                    {isLiked && likesNumber === 0 ? 'You liked this post' : (isLiked ? `You and ${likesNumber} others` : likesNumber)}   
                    </span>

                <a href="#" class="card-link comments-info">{commantsNumber} commants</a>
                </div>
                <hr></hr>
                <div className="btn-row justify-content-between">
                    <button 
                        className="btn btn-post-card col-4 align-items-center" onClick={handleLikeClick}>
                        <i className={`text-primary ${isLiked ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up"}`}></i>
                        <span className={isLiked ? "liked-text" : ""}>Like</span>
                        
                    </button>
                    <button class="btn btn-post-card col-4 align-items-center">
                        <i class="bi bi-chat text-primary"></i>
                        Comment
                    </button>
                    <button class="btn btn-post-card col-4 align-items-center">
                        <i class="bi bi-share text-primary"></i>
                        Share
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}
export default PostCard;