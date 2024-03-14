import { useState } from "react";

function EditUserWindow(loggedUser){
    const [userFirstName, setUserFirstName] = useState(loggedUser.firstName);
    const [userLastName, setUserLastName] = useState(loggedUser.lastName);
    const [userPassword, setUserPassword] = useState(loggedUser.password);
    const [userPhoto, setUserPhoto] = useState(loggedUser.profilePhoto);
    const updatedUser = {
        firstName: userFirstName,
        lastName: userLastName, 
        password: userPassword, 
        profilePhoto: userPhoto
    }
    return (
        <div>
            {/* <div className='form-box-signUp justify-content-center align-items-center'>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>

            <form className="row justify-content-center d-flex needs-validation" onSubmit={handleSignUp}>
                <NameField  setFirstName={setUserFirstName} setLastName={setUserLastName}/>
                <PasswordFields  setUserPassword={setUserPassword} setUserPasswordVerify={setPasswordVerify}/>
                <ProfilePhotoField setProfilePhoto={setUserPhoto} />

                <div className="row justify-content-center align-items-center signup">
                    <div className="col-12 text-center">
                        <button className="btn btn-success btn-sign" type="submit">Sign up</button>
                    </div>
                </div>
            </form>
            </div> */}
        </div>
        
    );
}
export default EditUserWindow;