import './SignUp.css'
import React, { useState } from 'react';


function SignUp({toggleForm}) {
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

// checks if the password fields match in every change in password field and set the new password
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        checkPasswordMatch(e.target.value, verifyPassword);
    };

    // set the changed password in every change in the varify password field
    const handleVerifyPasswordChange = (e) => {
        const newPassword = e.target.value;
        setVerifyPassword(newPassword);
    
        // checks match after the changing
        if (password !== newPassword) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };

// checks if the password fields match
    const checkPasswordMatch = (password, verifyPassword) => {
        if (password !== '' || verifyPassword !== '') {
            setPasswordMatch(password === verifyPassword);
        } else {
            setPasswordMatch(true); 
        }
    };

// can submit only if the passwords match and valid
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!passwordMatch) {
            console.log('Passwords do not match. Please fix it.');
            return;
        }
        if (password.length < 8 || password.length > 20) {
            console.log('Password is not valid. Please fix it.');
            return;
        }
        console.log('Form submitted successfully!');
    };
    

    return(
        <div className='form-box-signUp col-4 justify-content-center align-items-center'>
            <button type="button" class="btn-close" aria-label="Close" onClick={toggleForm}></button>
            <div className="row justify-content-center align-items-center pt-2">
                    <div className="fw-bold titleSignup">Sign Up</div>
            </div>
            <div className="row justify-content-center align-items-center pt-2">
                    <div className="fw-normal signupSlogn">It's quick and easy.</div>
            </div>

            <form class="row justify-content-center align-items-center needs-validation" novalidate onSubmit={handleSubmit}>
                <div className="row justify-content-center align-items-center">
                    <div class="col-md-6">
                        <label for="validationCustom01" class="form-label"></label>
                        <input type="text" class="form-control" id="validationCustom01" placeholder='First name' required></input>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom02" class="form-label"></label>
                        <input type="text" class="form-control" id="validationCustom02" placeholder='Last name' required></input>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center">
                    <div class="col-md-12">
                        <label for="validationCustomUsername" class="form-label"></label>
                        <div class="input-group has-validation">
                        <input type="email" class="form-control" id="validationCustomUsername" placeholder="Email" aria-describedby="inputGroupPrepend" required></input>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center">
                        <div className="input-group-text col-12 align-items-center">
                            <input type="password" className={`form-control ${(password.length >= 8 & password.length <= 20) ? 'is-valid' : (password.length > 0 | password.length > 20 ? 'is-invalid' : '') }`} placeholder="New password" aria-describedby="passwordHelpInline"  
                                onChange={handlePasswordChange} required></input>
                             <span className='question-icon col-1'>
                                <i className="bi bi-question-circle"></i>
                                <span id="passwordHelpInline" className="helper-text">
                                Must be 8-20 characters long.
                                </span>
                            </span>
                        </div>
                        <label for="validationCustom03" className="form-label">
                            {password !== '' ? (password.length >= 8 && password.length <= 20 ? (<span className="text-success"></span>) : (password.length < 8 ? 
                            (<span className="text-danger">Password too short</span>) : 
                            (<span className="text-danger">Password too long</span>))) : ("")}
                        </label>
                </div>

                <div className="row justify-content-center align-items-center mt-2">
                    <div class="col-md-12">
                    <input type="password" className={`form-control ${(passwordMatch && verifyPassword !== '') ? 'is-valid' : (verifyPassword !== '' ? 'is-invalid' : '') }`}
                        id="validationCustom03" placeholder='Password verify' value={verifyPassword}
                        onChange={handleVerifyPasswordChange} required ></input>
                    <label for="validationCustom03" class="form-label">
                        {verifyPassword !== '' ? (passwordMatch ? (
                                <span className="text-success">Passwords match!</span>) : (
                                <span className="text-danger">Passwords do not match</span>)) : ("")}</label>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center birthday">
                        <div className="col-md-12">
                                <label htmlFor="exampleDate" className="form-label">Birthday</label>
                                <input type="date" className="form-control" id="exampleDate" required></input>
                        </div>
                    </div>
            
                <div className="row check-box-gender">Gender
                    <div class="col-md-12">
                        <div class="form-check btn-group align-items-center col-4" role="group">
                            <label class="form-check-label btn btn-outline-secondary gender-btn" for="gridRadios1">
                            Male
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"></input>
                            </label>
                        </div>
                        <div class="form-check btn-group align-items-center col-4" role="group">
                            <label class="form-check-label btn btn-outline-secondary gender-btn" for="gridRadios2">
                            Female
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                            </label>
                        </div>
                        <div class="form-check btn-group align-items-center col-4" role="group">
                            <label class="form-check-label btn btn-outline-secondary gender-btn" for="gridRadios3">
                            Other
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"></input>
                            </label>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center align-items-center">
                    <div class="col-mb-12">
                        <label for="formFile" class="form-label"></label>
                        <input class="form-control upload-photo" type="file" id="formFile"></input>
                    </div>
                </div>

                <div className="row agree-terms">
                    <div class="col-12">
                        <div class="form-check d-flex">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
                            <label class="form-check-label" for="invalidCheck2">
                                Agree to terms and conditions
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center signup">
                    <div class="col-12 text-center">
                        <button class="btn btn-success btn-sign" type="submit">Sign up</button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default SignUp;