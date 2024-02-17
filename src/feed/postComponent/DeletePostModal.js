function DeletePostModal({onDeletePost, post_id}){

    const handleDeleteClick = () => {
        // Call onDeletePost with the post_id
        onDeletePost(post_id);
    };
    return(

            <div className="modal fade" id={`confirmDelete-${post_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this post?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={handleDeleteClick} data-bs-dismiss="modal">Delete post</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default DeletePostModal;