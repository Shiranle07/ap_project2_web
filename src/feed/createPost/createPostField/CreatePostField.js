import PostOptions from './PostOptions';
import profilePhoto from "../../../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import "./CreatePostField.css"

function CreatePostField({userData}){
    return(
        <div class="container mb-3">
            <div class="card mt-2">
                <div class="card-body">
                    <img src={userData.profilePhoto ? userData.profilePhoto : profilePhoto} alt="profile" width="40" height="40" class="d-inline-block align-text-center profile-photo " id="display-user"></img>
                    <button className='col-11 post-input' data-bs-target=".postModal" data-bs-toggle="modal">{`What's on your mind, ${userData.firstName}?`}</button>
                    <hr></hr>

                    <PostOptions iconClass={"bi bi-camera-video-fill post-option"} text={"Live video"} id={"live"}/>
                    <button type="button" className='nav-item btn btn-outline post-btn col-4' data-bs-target=".postModal" data-bs-toggle="modal">
                        <i class="bi bi-images post-option" id="photo" ></i>
                        Photo/video
                    </button>            
                    <PostOptions iconClass={"bi bi-emoji-laughing post-option"} text={"Feeling/activity"} id={"emoji"}/>
                </div>
            </div>
        </div>
    );
}
export default CreatePostField;