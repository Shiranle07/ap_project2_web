import { useState, useEffect } from 'react';
import PostAdditionals from '../createPost/createPostWindow/PostAdditionals';


function EditPostWindow({post_id, user_firstName, user_lastName, user_photo, postBody, postPhoto, onEditPost }) {
    const [postContent, setPostContent] = useState(postBody);
    const [preview, setPreview] = useState(postPhoto || null);
    const [showPhotoInput, setShowPhotoInput] = useState(false);


        const handleEditClick = () => {
        // Call onEditPost with the post_id
        onEditPost(post_id, postContent, preview);
    };

    const handlePostContentChange = (event) => {
        const content = event.target.value;
        setPostContent(content);
    };

    useEffect(() => {
        setPostContent(postBody);
        setPreview(postPhoto || null);
    }, [postBody, postPhoto]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };

    return (
        <div className="modal fade editModal" id={`editPost-${post_id}`} aria-hidden="true" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-center flex-grow-1">Edit post</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex align-items-center">
                            <img src={user_photo} alt="profile" width="40" height="40" className="d-inline-block align-text-center profile-photo mr-2" id="display-user" />
                            <p className="fw-bolder m-0">
                                {user_firstName} {user_lastName}
                            </p>
                        </div>
                        <form>
                            <textarea className="form-control mt-3" id="postContent" value={postContent} onChange={handlePostContentChange}></textarea>
                        </form>
                        <div className='card mt-3 post-additionals'>
                        {showPhotoInput && (
                            <div className="justify-content-between">
                                <input
                                    name="PostPhoto"
                                    className="form-control upload-photo"
                                    type="file"
                                    value={''}
                                    id="postPhoto"
                                    onChange={handleFileChange}/>
                            </div>
                        )}
                        {preview&&(
                            <div className="col-md-6 mt-2">
                                <div className="preview-window">
                                    <p className="preview-title">Preview:</p>
                                        <img src={preview} alt="Preview" className="preview-image" style={{ maxWidth: '100%', maxHeight: '200px' }}/>
                                </div>
                            </div>
                        )}
                        <div className='row card-body p-2'>
                            <div className="col d-flex align-items-center">
                                Add to your post
                            </div>
                            <div className="col-auto d-flex align-items-center">
                                <PostAdditionals iconClass={"btn bi bi-images post-option add"} text={"Photo/video"} id={"photo"} onClick={() => setShowPhotoInput(!showPhotoInput)}/>
                                <PostAdditionals iconClass={"btn bi bi-person-fill-add add"} text={"Tag people"} id={"people"}/>
                                <PostAdditionals iconClass={"btn bi bi-emoji-laughing post-option add"} text={"Feeling/activity"} id={"emoji"}/>
                                <PostAdditionals iconClass={"btn bi bi-geo-alt-fill add"} text={"Check in"} id={"location"}/>
                                <PostAdditionals iconClass={"btn bi bi-filetype-gif add"} text={"GIF"} id={"gif"}/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button className="btn btn-primary w-100 new-post-btn" data-bs-dismiss="modal" onClick={() => handleEditClick()}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditPostWindow;
