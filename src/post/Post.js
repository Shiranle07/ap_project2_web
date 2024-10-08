import './Post.css';
import React, { useState, useEffect } from 'react';
import CommentCard from './CommentCard';
import ShareOption from '../feed/postComponent/ShareOption';
import PostComponent from '../feed/postComponent/PostComponent';

function Post({post_id, user_email, user_firstName, user_lastName, user_photo, postBody, postPhoto, likesNumber, publication_date, comments, isLiked, setIsLiked, onDeletePost, onEditPost, userData, addCommentToPost, deleteCommentFromPost, token}) {
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
            const index = commentsList.length; // Get the current number of comments
            const comment_id = `${post_id}#${index+1}`; // Create the comment_id
            const updatedCommentsList = [
                ...commentsList,
                {
                    comment_id: comment_id,
                    commenter_firstName: userData.FirstName,
                    commenter_lastName: userData.LastName,
                    commenter_photo: userData.ProfilePhoto,
                    commentBody: newComment
                }
            ];
            setCommentsList(updatedCommentsList);
            addCommentToPost(post_id, comment_id, newComment);
            setNewComment(""); // Clear the comment input field
        }
    };

    const onDeleteComment = (comment_id) => {
        // Filter out the comment with the given comment_id
        const updatedCommentsList = commentsList.filter(comment => comment.comment_id !== comment_id);
        setCommentsList(updatedCommentsList);
        deleteCommentFromPost(post_id, comment_id)
    };

    const onSaveComment = (comment_id, editedComment) => {
        // Update the comment with the given comment_id
        const updatedCommentsList = commentsList.map(comment => {
            if (comment.comment_id === comment_id) {
                return { ...comment, commentBody: editedComment };
            }
            return comment;
        });
        setCommentsList(updatedCommentsList);
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
                        
                    <PostComponent post_id={post_id} user_email={user_email} user_firstName={user_firstName} user_lastName={user_lastName} user_photo={user_photo} postBody={postBody} postPhoto={postPhoto} likesNumber={likesNumber} commentsNumber={commentsList.length} userData={userData} publication_date={publication_date} comments={comments} isLiked={isLiked} setIsLiked={setIsLiked} onDeletePost={onDeletePost} onEditPost={onEditPost} token={token}/>
                        <hr />

                        <div className='post-list'>
                            {commentsList.map((comment, index) =>
                                <CommentCard key={index} {...comment} onDeleteComment={onDeleteComment} onSaveComment={onSaveComment}/>
                            )}
                        </div>
                    </div>
                    <div className="modal-footer justify-content-center" id="comment">
                    <div class="comment">
                        <img src={userData.ProfilePhoto} alt="profile" width="40" height="40" class="d-inline-block float-left profile-photo" id="display-user"></img>
                    </div>
                        <textarea className="post-input form-control" placeholder="Write a comment..." aria-label="Write a comment" value={newComment} id="comment-input" onChange={handleCommentChange}> </textarea>
                        <button type="button" className="btn d-flex inline-block" onClick={handleAddComment}><i class="bi bi-send-fill comment-send"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
