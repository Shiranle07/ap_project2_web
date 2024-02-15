// PostCard.jsx
import React, { useState, useEffect } from 'react';
import profilePhoto from "../../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import "./PostCard.css";
import post from "../../post/Post.js"
import ShareOption from '../postComponent/ShareOption.js';
import Post from '../../post/Post.js';
import PostComponent from '../postComponent/PostComponent.js';


function PostCard({ post_id, user_firstName, user_lastName, user_photo, postBody, postPhoto, likesNumber, commentsNumber, publication_date, comments, onDeletePost, onEditPost }) {
    const [isLiked, setIsLiked] = useState(false); // State to track if button is liked

    useEffect(() => {
        // Reset isLiked state when a new post is rendered
        setIsLiked(false);
    }, [post_id]); // Reset when post_id changes


    return (
        <div class="container mb-3">
            <div class="card">
                <div class="card-body">
                <PostComponent post_id={post_id} user_firstName={user_firstName} user_lastName={user_lastName} user_photo={user_photo} postBody={postBody} postPhoto={postPhoto} likesNumber={likesNumber} commentsNumber={commentsNumber} publication_date={publication_date} isLiked={isLiked} setIsLiked={setIsLiked} onDeletePost={onDeletePost} onEditPost={onEditPost}/>
                </div>
            </div>

            <Post post_id={post_id} user_firstName={user_firstName} user_lastName={user_lastName} user_photo={user_photo} postBody={postBody} postPhoto={postPhoto} likesNumber={likesNumber} commentsNumber={commentsNumber} publication_date={publication_date} comments={comments} isLiked={isLiked} setIsLiked={setIsLiked} onDeletePost={onDeletePost} onEditPost={onEditPost}/>

        </div>
        
 );
}

export default PostCard;
