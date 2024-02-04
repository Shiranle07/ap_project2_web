import './SignUp.css'
import React, { useState } from 'react';


function SignUp({toggleForm}) {
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        checkPasswordMatch(e.target.value, verifyPassword);
    };

    const handleVerifyPasswordChange = (e) => {
        const newPassword = e.target.value;
        setVerifyPassword(newPassword);
    
        if (password !== newPassword) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };

    const checkPasswordMatch = (password, verifyPassword) => {
        if (password !== '' || verifyPassword !== '') {
            setPasswordMatch(password === verifyPassword);
        } else {
            setPasswordMatch(true); 
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if passwords match before allowing form submission
        if (!passwordMatch) {
            // Display an error message or take appropriate action
            console.log('Passwords do not match. Please fix it.');
            return;
        }
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
                        <div class="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom02" class="form-label"></label>
                        <input type="text" class="form-control" id="validationCustom02" placeholder='Last name' required></input>
                        <div class="valid-feedback">
                        Looks good!
                        </div>
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
                        <input type="password" id="inputPassword6" className="form-control" placeholder="New password" aria-describedby="passwordHelpInline"  onChange={handlePasswordChange} required></input>
                        <span className='question-icon col-1'>
                        <i className="bi bi-question-circle"></i>
                        <span id="passwordHelpInline" className="helper-text">
                        Must be 8-20 characters long.
                        </span>
                        </span>
                    </div>
                </div>


                <div className="row justify-content-center align-items-center">
                    <div class="col-md-12">
                    <label for="validationCustom03" class="form-label">
                        {password !== '' ? (passwordMatch ? (
                                <span className="text-success">Passwords match!</span>) : (
                                <span className="text-danger">Passwords do not match</span>)) : ("")}</label>
                    <input type="password" className={`form-control ${(passwordMatch && password !== '') ? 'is-valid' : (password !== '' ? 'is-invalid' : '') }`}
                        id="validationCustom03"
                        placeholder='Password verify'
                        value={verifyPassword}
                        onChange={handleVerifyPasswordChange}
                        required
                    ></input>
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