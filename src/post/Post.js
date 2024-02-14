import React from 'react';
import './Post.css';

function Post({ id, author, post_text, publication_date }) {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModalToggle${id}`}>
                Open Post
            </button>

            <div className="modal fade" id={`exampleModalToggle${id}`} aria-hidden="true" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-center flex-grow-1" id={`exampleModalToggleLabel${id}`}>{author}'s post</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="user_info">
                                    <div className='user_name'>
                                        <strong></strong> {author} &nbsp;&nbsp;&nbsp;&nbsp;
                                        <strong></strong> {publication_date}
                                    </div>
                                    <div className='text'>
                                        <strong></strong> {post_text}
                                    </div>
                                </div>
                            </div>


{/* comments */}
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Example label</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
</div>


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
</div>



                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
