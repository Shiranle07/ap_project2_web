import React, { useState } from 'react';
import './LoginPage.css';
import UsersPasswordField from './usersPasswordField/UsersPasswordField';
import UsersEmailField from './usersEmailField/UsersEmailField';
import ErrorMessage from './errorMessage/ErrorMessage';
import LogInButton from './logInButton/LogInButton';
import NewAccountButton from './newAccountButton/NewAccountButton';
import ForgotPasswordLink from './forgotPasswordLink/ForgotPasswordLink';

function LoginPage({toggleForm, userData}) {
    const [email, setEmail] = useState(userData.Email || '');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


// checks for the login. only signed up users can login
    const handleLogin = (e) => {
        e.preventDefault();

        // Check if email and password match the user data
        if (email==userData.Email && password==userData.Password) {
            setError('');
            console.log('Login successful');
        } else {
            // email or password incorrect
            setError('Email or password is incorrect');
        }
    };

    return (
        <div className='form-box col-4'>
            <form className="needs-validation" onSubmit={handleLogin}>

                <UsersEmailField email={email} setEmail={setEmail}/>
                <UsersPasswordField password={password} setPassword={setPassword}/>

                {error && (
                    <ErrorMessage error={error}/>
                )}

                <LogInButton/>

                <ForgotPasswordLink/>
            </form>

            <div className="new-account row justify-content-center align-items-center">
                <div className="line"></div>
            </div>

            <NewAccountButton toggleForm={toggleForm}/>
        </div>
    );
}

export default LoginPage;
