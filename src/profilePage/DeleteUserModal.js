function DeleteUserModal(){
    
    return(<div class="modal fade" id={`deleteUser`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to delete your account?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger"  data-bs-dismiss="modal">Delete</button>
            </div>
        </div>
    </div>
</div>);
}
export default DeleteUserModal;