// PostCard.jsx
import React, { useState, useEffect } from 'react';
import profilePhoto from "../../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import "./PostCard.css";
import post from "../../post/Post.js"
import ShareOption from '../postComponent/ShareOption.js';
import Post from '../../post/Post.js';
import PostComponent from '../postComponent/PostComponent.js';


function PostCard({ _id, user_firstName, user_lastName, user_photo, postBody, postPhoto, likesNumber, publication_date_formatted, comments, onDeletePost, onEditPost, userData, addCommentToPost, deleteCommentFromPost}) {
    const [isLiked, setIsLiked] = useState(false); // State to track if button is liked
    const [commentsCount, setCommentsCount] = useState(comments.length);

    useEffect(() => {
        // Update comments count when comments change
        setCommentsCount(comments.length);
    }, [comments]);

    useEffect(() => {
        // Reset isLiked state when a new post is rendered
        setIsLiked(false);
    }, [_id]); // Reset when post_id changes


    return (
        <div class="container mb-3">
            <div class="card">
                <div class="card-body">
                <PostComponent post_id={_id} user_firstName={user_firstName} user_lastName={user_lastName} user_photo={user_photo} postBody={postBody} postPhoto={postPhoto} likesNumber={likesNumber} commentsNumber={commentsCount} publication_date={publication_date_formatted} isLiked={isLiked} setIsLiked={setIsLiked} onDeletePost={onDeletePost} onEditPost={onEditPost}/>
                </div>
            </div>

            <Post post_id={_id} user_firstName={user_firstName} user_lastName={user_lastName} user_photo={user_photo} postBody={postBody} postPhoto={postPhoto} likesNumber={likesNumber} publication_date={publication_date_formatted} comments={comments} isLiked={isLiked} setIsLiked={setIsLiked} onDeletePost={onDeletePost} onEditPost={onEditPost} userData={userData} addCommentToPost={addCommentToPost} deleteCommentFromPost={deleteCommentFromPost}/>

        </div>
        
 );
}

export default PostCard;
