import profilePhoto from "../../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import React, { useState } from 'react';

function CommentCard({comment_id, commenter_firstName, commenter_lastName, commenter_photo, commentBody, onDeleteComment, onSaveComment}){
    const [isEditing, setIsEditing] = useState(false);
    const [editedComment, setEditedComment] = useState(commentBody);

    const handleEditComment = () => {
        setIsEditing(true);
    };
    
    const handleSaveComment = () => {
        // Call the onSaveComment function passed from the parent component
        onSaveComment(comment_id, editedComment);
        setIsEditing(false); // Exit editing mode
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedComment(commentBody); // Reset edited comment to original comment
    };

    const handleInputChange = (event) => {
        setEditedComment(event.target.value);
    };

    const handleDeleteComment = () => {
        // Call the onDeleteComment function passed from the parent component
        onDeleteComment(comment_id);
    };

    return(
<div className="d-flex">
    <img src={commenter_photo ? commenter_photo : profilePhoto} alt="profile" width="40" height="40" className="d-inline-block align-text-center profile-photo mr-2" id="display-user"></img>
    <div className="pb-3 comment-card d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
            <p className="fw-bolder m-0">
                {commenter_firstName} {commenter_lastName}
            </p>
            {isEditing ? (
                <button type="button" className="btn btn-close close-edit" aria-label="Close" onClick={handleCancelEdit}></button>
            ) : (
                <div className="btn-group dropend">
                    <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-three-dots comment-menu"></i>
                    </button>
                        <ul className="dropdown-menu" id="comment">
                            <button className="btn dropdown-item comment-dropdown" onClick={handleEditComment}>
                                Edit comment</button>
                            <button className="btn dropdown-item comment-dropdown text-danger" onClick={handleDeleteComment}>
                                Delete comment</button>
                        </ul>
                </div>
            )}
            </div>
            {isEditing ? (
                <div className="d-flex align-items-center comment-edit">
                    <textarea className="form-control" value={editedComment} onChange={handleInputChange}></textarea>
                    <button className="btn text-primary mx-2" onClick={handleSaveComment}>Save</button>
                </div>
            ) : (
                <p className="card-text pt-2">{commentBody}</p>
            )}
        </div>
    </div>
    );
}
export default CommentCard;