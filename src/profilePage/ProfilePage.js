import profilePhoto from "../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import './ProfilePage.css'

function ProfilePage({user}){
    return(
        <div>
            <div className="card user-card">
            <img src={user.ProfilePhoto ? user.profilePhoto : profilePhoto} alt="profile" width="200" height="200" class="d-inline-block align-text-center profile-photo mr-2" id="display-user"></img>
            <p class="fw-bolder m-0">
                {user.FirstName} {user.LastName}
            </p>
            </div>
        </div>
    );
}

export default ProfilePage;