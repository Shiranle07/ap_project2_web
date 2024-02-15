import './Post.css';
import {React, useState} from 'react';

function Post({ id, author, post_text, publication_date }) {
    
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };
    return (
        
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModalToggle${id}`}>
                Open Post
            </button>
            <div className="modal fade" id={`exampleModalToggle${id}`} aria-hidden="true" tabIndex="-1">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-center flex-grow-1" id={`exampleModalToggleLabel${id}`}>{author}'s post</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="user_info">
                                <div class="d-flex align-items-center">
                                {/* <img src={userData.ProfilePhoto ? userData.ProfilePhoto : profilePhoto} alt="profile" width="40" height="40" class="d-inline-block align-text-center profile-photo mr-2" id="display-user"></img> */}
                                <p class="fw-bolder m-0">
                                    {author} {publication_date}
                                </p>
                                 </div>
                                    <div className='text'>
                                        <strong></strong> {post_text}
                                    </div>
                                </div>
                            </div>

                        {/* comments */}                        
                        <div className="comments">
                            <div className="comment">
                                <div className="commenter_info">
                                    <strong>Commenter Name:</strong> {author} &nbsp;&nbsp;&nbsp;&nbsp;
                                    <strong>Date:</strong> {publication_date}
                                </div>
                                <div className="comment_text">
                                    <p>{post_text}</p>
                                </div>    
                            </div>
                            <hr></hr>
                            <div class="d-flex align-items-center justify-content-between">
    <button className="btn btn-post-card col-4 align-items-center" onClick={handleLikeClick}>
        <i className={`text-primary ${isLiked ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up"}`}></i>
        <span className={isLiked ? "liked-text" : ""}>Like</span>
    </button>

    <span class="me-2 d-flex align-items-center">
        <i class="bi bi-chat text-primary"></i>
        <div class="ms-2"> Comment </div>
    </span>

    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle bg-transparent p-2" type="button" id="shareDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-share text-primary"></i>
            <span class="ms-2 share-text"> Share </span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="shareDropdown" style={{ maxHeight: '200px', overflowY: 'auto' }}>
            <li><a class="dropdown-item" href="#">Share to Feed</a></li>
            <li><a class="dropdown-item" href="#">In a group</a></li>
            <li><a class="dropdown-item" href="#">On a friend's profile</a></li>
            <li><a class="dropdown-item" href="#">Message</a></li>
            <li><a class="dropdown-item" href="#">WhatsApp</a></li>
            <li><a class="dropdown-item" href="#">Fakegram</a></li>
            <li><a class="dropdown-item" href="#">Share External</a></li>
        </ul>
    </div>

</div>

                        </div>
                        <div class="sticky-bottom">
                        <textarea class="col-11 post-input form-control" placeholder="Write a comment.." aria-label="Write a comment"></textarea>
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Add comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
