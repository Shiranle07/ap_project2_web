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

        const res = await fetch("http://localhost:8080/tokens", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(user)
        })

        const data = await res.json()
        const userToken = data.headers.get('Authorization').split(' ')[1];
        console.log(userToken);



        // // Check if email and password match the user data
        // if (email==userData.Email && password==userData.Password) {
        //     setUserData({
        //         "FirstName" : userData.FirstName,
        //         "LastName" : userData.LastName,
        //         "Email" : userData.Email,
        //         "Password" : userData.Password,
        //         "ProfilePhoto" : userData.ProfilePhoto,
        //         "IsLogIn" : true}
        //     )
        //     setError('');
        //     // call to the server to get all the posts

            
        //     navigate('/posts');
        // } else {
        //     // email or password incorrect
        //     setError('Email or password is incorrect');
        // }
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
