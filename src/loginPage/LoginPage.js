import React, { useState } from 'react';
import './LoginPage.css';
import UsersPasswordField from './usersPasswordField/UsersPasswordField';
import UsersEmailField from './usersEmailField/UsersEmailField';
import ErrorMessage from './errorMessage/ErrorMessage';
import LogInButton from './logInButton/LogInButton';
import NewAccountButton from './newAccountButton/NewAccountButton';
import ForgotPasswordLink from './forgotPasswordLink/ForgotPasswordLink';
import {useNavigate } from 'react-router-dom';
import LoginLogo from './loginLogo/LoginLogo';


function LoginPage({userData, setUserData}) {
    const [email, setEmail] = useState(userData.Email || ''); //if user hasn't entered email, initilize as empty
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


// checks for the login. only signed up users can login
    async function handleLogin(e){
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }

        const response = await fetch("http://localhost:8080/api/tokens", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(user)
        })

        if (response.status !== 201) {
            alert('Invalid username and/or password');
            return;
          }

          const json = await response.json();
          const userToken = json.token;
          const loggedUser = json.user
          navigate('/posts', { state: { token: userToken, user: loggedUser } });
    };

    return (
        <div>
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

                <NewAccountButton/>
            </div>
            <LoginLogo/>
        </div>

    );
}

export default LoginPage;
