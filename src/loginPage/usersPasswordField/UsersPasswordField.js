import React, { useState } from 'react';
import "./UsersPasswordField.css"

function UsersPasswordField({password, setPassword}){

    const [showPassword, setShowPassword] = useState(false);

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