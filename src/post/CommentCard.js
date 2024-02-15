import profilePhoto from "../signUp/profilePhotoField/defaultProfilePhoto.jpg";

function CommentCard({commenter_firstName, commenter_lastName, commenter_photo, commentBody}){
    return(
        <div className="d-flex">
        <img src={commenter_photo ? commenter_photo : profilePhoto} alt="profile" width="40" height="40" class="d-inline-block align-text-center profile-photo mr-2" id="display-user"></img>
        <div className="pb-3 comment-card">
            <div class="d-flex align-items-center">
                <p class="fw-bolder m-0">
                    {commenter_firstName} {commenter_lastName}
                </p>
            </div>
            <p class="card-text pt-2">{commentBody}</p>
        </div>
        </div>
    );
}
export default CommentCard;