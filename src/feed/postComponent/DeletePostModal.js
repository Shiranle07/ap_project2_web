function DeletePostModal({onDeletePost, post_id}){

    const handleDeleteClick = () => {
        // Call onDeletePost with the post_id
        onDeletePost(post_id);
    };
    return(

            <div class="modal fade" id={`confirmDelete-${post_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete this post?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" onClick={handleDeleteClick} data-bs-dismiss="modal">Delete post</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default DeletePostModal;