import { useState } from "react";
import NameField from "../signUp/nameField/NameField";
import PasswordFields from "../signUp/passwordFields/PasswordFields";
import ProfilePhotoField from "../signUp/profilePhotoField/ProfilePhotoField";

function EditUserWindow(user, token){
    const [userFirstName, setUserFirstName] = useState(user.user.firstName);
    const [userLastName, setUserLastName] = useState(user.user.lastName);
    const [userPassword, setUserPassword] = useState(user.user.password);
    const [userPhoto, setUserPhoto] = useState(user.user.profilePhoto);
    const [userPasswordVerify, setUserPasswordVerify] = useState(user.user.password)
    const updatedUser = {
        firstName: userFirstName,
        lastName: userLastName, 
        password: userPassword, 
        profilePhoto: userPhoto
    }
    console.log(user.token)

    async function handleUpdate(){
        const response = await fetch(`http://localhost:8080/api/users/${user.user.email}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
                'authorization': 'bearer ' + user.token // attach the token
            },
            body: JSON.stringify({userBody: updatedUser})
        })
        if(response.ok){
            alert("Your account updated successfully! \n Log in again to see the changes");
        }
    }
    return (
<div className="modal fade editUserModal" id={`editUser`} aria-hidden="true" tabIndex="-1">
<div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
        <div className="modal-header">
            <h1 className="modal-title fs-5 text-center flex-grow-1">Edit User Details</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <form className="row justify-content-center d-flex needs-validation">
            <div className="col-md-6 d-flex form-field">
                <label for="validationCustom01" className="form-label"></label>
                <input type="text" className="form-control" value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)}></input>
            </div>
            <div className="col-md-6 d-flex form-field">
                <label for="validationCustom01" className="form-label"></label>
                <input type="text" className="form-control" value={userLastName} onChange={(e) => setUserLastName(e.target.value)}></input>
            </div>
                <PasswordFields  setUserPassword={setUserPassword} setUserPasswordVerify={setUserPasswordVerify}/>
                <ProfilePhotoField setProfilePhoto={setUserPhoto} photo = {userPhoto} />
            </form>
            </div>
        <div className="modal-footer justify-content-center">
            <button className="btn btn-primary w-100 new-post-btn" data-bs-dismiss="modal" onClick={() => handleUpdate()}>Save Changes</button>
        </div>
    </div>
</div>
</div>
        
    );
}
export default EditUserWindow;


