import './Post.css';
import React, { useState, useEffect } from 'react';
import profilePhoto from "../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import CommentCard from './CommentCard';
import ShareOption from '../feed/postComponent/ShareOption';
import PostComponent from '../feed/postComponent/PostComponent';

function Post({post_id, user_firstName, user_lastName, user_photo, postBody, postPhoto, likesNumber, commentsNumber, publication_date, comments, isLiked, setIsLiked, onDeletePost, onEditPost, userData}) {
    const [commentsList, setCommentsList] = useState(comments);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        // Update the commentsList state whenever the comments prop changes
        setCommentsList(comments);
    }, [comments]);

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleAddComment = () => {
        if (newComment.trim() !== "") {
            const updatedCommentsList = [...commentsList, {
                commenter_firstName : userData.FirstName,
                commenter_lastName : userData.LastName,
                commenter_photo : userData.ProfilePhoto,
                commentBody : newComment
            }];
            setCommentsList(updatedCommentsList);
            setNewComment(""); // Clear the comment input field
        }
    };


    return (
        <div className="modal fade" id={`exampleModalToggle-post-${post_id}`} aria-hidden="true" tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-center flex-grow-1">{user_firstName} {user_lastName}'s post</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <PostComponent post_id={post_id} user_firstName={user_firstName} user_lastName={user_lastName} user_photo={user_photo} postBody={postBody} postPhoto={postPhoto} likesNumber={likesNumber} commentsNumber={commentsNumber} publication_date={publication_date} comments={comments} isLiked={isLiked} setIsLiked={setIsLiked} onDeletePost={onDeletePost} onEditPost={onEditPost}/>
                        <hr />

                        <div className='post-list'>
                            {commentsList.map((comment, index) =>
                                <CommentCard key={index} {...comment} />
                            )}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <textarea className="col-11 post-input form-control" placeholder="Write a comment.." aria-label="Write a comment" value={newComment} onChange={handleCommentChange}> </textarea>
                        <button type="button" className="btn btn-primary" onClick={handleAddComment}>Add comment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
