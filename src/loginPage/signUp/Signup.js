import './SignUp.css';
import React, { useState } from 'react';
import NameField from './NameField';
import EmailField from './EmailField';
import PasswordFields from './PasswordFields';
import GenderField from './GenderField';
import TitleSignup from './TitleSignUp';
import ProfilePhotoField from './ProfilePhotoField';
import BirthdayField from './BirthdayField';
import AgreeTermsField from './AgreeTermsField';

function SignUp({ toggleForm }) {

    return (
        <div className='form-box-signUp justify-content-center align-items-center'>
            <button type="button" className="btn-close" aria-label="Close" onClick={toggleForm}></button>

            <TitleSignup/>
            <form className="row justify-content-center d-flex needs-validation" novalidate>
                <div className="row">
                    <NameField title="First Name" required/>
                    <NameField title="Last Name" required/>
                </div>

                <EmailField required/>

                <PasswordFields required/>

                <BirthdayField required/>

                <GenderField option1 = "Female" option2 = "Male" option3 = "Other" required/>

                <ProfilePhotoField/>

                <AgreeTermsField required/>

                <div className="row justify-content-center align-items-center signup">
                    <div className="col-12 text-center">
                        <button className="btn btn-success btn-sign" type="submit">Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
