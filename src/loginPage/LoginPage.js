import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({toggleForm, userData}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();

        // Check if email and password match the expected values (for demonstration purposes)
        if (email==userData.Email && password==userData.Password) {
            // Authentication successful
            setError('');
            console.log('Login successful');
            // You can redirect the user or perform any other actions here
        } else {
            // Authentication failed
            setError('Invalid email or password');
        }
    };

    return (
        <div className='form-box col-4'>
            
            <form className="needs-validation" onSubmit={handleLogin}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-11">
                        <label htmlFor="validationDefaultUsername" className="form-label"></label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationDefaultUsername"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend2"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="row justify-content-center align-items-center">
                    <div className="col-11">
                        <label htmlFor="inputPassword4" className="form-label"></label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            id="validationDefault03"
                            aria-describedby="inputGroupPrepend2"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                {error && (
                    <div className="row justify-content-center align-items-center mt-1 mb-3">
                        <div className="col-11">
                            <div className="error-message">{error}</div>
                        </div>
                    </div>
                )}

                <div className="row justify-content-center align-items-center mt-3">
                    <div className="d-grid col-11">
                        <button type="submit" className="btn btn-primary btn-login">Log In</button>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center pt-2">
                    <div className="text-center">
                        <a className="link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" id="forgot-password" href=""> Forgot password?</a>
                    </div>
                </div>
            </form>

            <div className="new-account row justify-content-center align-items-center">
                <div className="line"></div>
            </div>

            <div className="new-account row justify-content-center align-items-center">
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="button" className="btn btn-success btn-sign" onClick={toggleForm} >Create new account
                    </button>
                </div>
            </div>

        </div>
    );
}

export default LoginPage;
