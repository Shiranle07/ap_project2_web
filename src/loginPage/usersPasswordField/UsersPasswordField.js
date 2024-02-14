import React, { useState } from 'react';
import "./UsersPasswordField.css"

function UsersPasswordField({password, setPassword}){

    const [showPassword, setShowPassword] = useState(false);

    // changed the password view from password to text and reverse, according to user's click on eye icon
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return(
        <div className="row justify-content-center align-items-center">
        <div className="col-11 input-group-text mt-2">
            <label htmlFor="inputPassword4" className="form-label "></label>
            <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                id="validationDefault03"
                aria-describedby="inputGroupPrepend2"
                required
                onChange={(e) => setPassword(e.target.value)}
            ></input>
            {/* the eye icon shown only when the user type on the password field.
            icon class also changes according to the requierd password view */}
            {password.length>0 &&(
                <button className="btn show-password-btn col-1" type="button" onClick={togglePasswordVisibility}>
                    <i class={showPassword ? "bi bi-eye-slash" : "bi bi-eye"} ></i>
                </button>
            )}
        </div>
    </div>
    );
}
export default UsersPasswordField;