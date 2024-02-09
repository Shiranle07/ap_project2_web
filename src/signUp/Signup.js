import './SignUp.css';
import React, { useState } from 'react';
import NameField from './nameField/NameField';
import EmailField from './emailField/EmailField';
import PasswordFields from './passwordFields/PasswordFields';
import GenderField from './genderField/GenderField';
import TitleSignup from './titleSignUp/TitleSignUp';
import ProfilePhotoField from './profilePhotoField/ProfilePhotoField';
import BirthdayField from './birthdayField/BirthdayField';
import AgreeTermsField from './argeeTermsField/AgreeTermsField';
import LoginLogo from '../loginPage/loginLogo/LoginLogo';


function SignUp({ toggleForm, userDataRef }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');


    const handleSignUp = (e) => {
        e.preventDefault();
        // Password length validation
        if (password.length < 8 || password.length > 20) {
            return;
        }

        // Password match validation
        if (password !== passwordVerify) {
            return;
        }
        // update user data acorrding to the user's input
        userDataRef.current = {
            "First name": firstName,
            "Last name": lastName,
            "Email": email,
            "Password": password,
            "Profile photo": profilePhoto || userDataRef.current["Profile photo"]
        };
        // change back to log in form
        toggleForm();

    };

    return (
        <div>
            <div className='form-box-signUp justify-content-center align-items-center'>
            <button type="button" className="btn-close" aria-label="Close" onClick={toggleForm}></button>

            <TitleSignup/>

            <form className="row justify-content-center d-flex needs-validation" onSubmit={handleSignUp}>
                <NameField required setFirstName={setFirstName} setLastName={setLastName}/>

                <EmailField required setEmail={setEmail}/>

                <PasswordFields required setUserPassword={setPassword} setUserPasswordVerify={setPasswordVerify}/>

                <BirthdayField required/>

                <GenderField option1 = "Female" option2 = "Male" option3 = "Other" required/>

                <ProfilePhotoField setProfilePhoto={setProfilePhoto}/>

                <AgreeTermsField required/>

                <div className="row justify-content-center align-items-center signup">
                    <div className="col-12 text-center">
                        <button className="btn btn-success btn-sign" type="submit">Sign up</button>
                    </div>
                </div>
            </form>
            </div>
            <LoginLogo/>
        </div>
        
    );
}

export default SignUp;
