import PostOptions from './PostOptions';
import profilePhoto from "../../../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import "./CreatePostField.css"

function CreatePostField({userData}){
    return(
        <div class="container mb-3">
        <div class="card mt-2">
        <div class="card-body">
            <img src={userData.ProfilePhoto ? userData.ProfilePhoto : profilePhoto} alt="profile" width="40" height="40" class="d-inline-block align-text-center profile-photo " id="display-user"></img>
            <button className='col-11 post-input' data-bs-target="#exampleModalToggle" data-bs-toggle="modal">{`What's on your mind, ${userData.FirstName}?`}</button>
            <hr></hr>
            <PostOptions iconClass={"bi bi-camera-video-fill post-option"} text={"Live video"} id={"live"}/>
            <PostOptions iconClass={"bi bi-images post-option"} text={"Photo/video"} id={"photo"}/>
            <PostOptions iconClass={"bi bi-emoji-laughing post-option"} text={"Feeling/activity"} id={"emoji"}/>
        </div>
    </div>
    </div>
    );
}
export default CreatePostField;