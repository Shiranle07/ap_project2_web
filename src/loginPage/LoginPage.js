import './LoginPage.css';

function LoginPage(){
    return(
        <div>
            <div className="form-floating col-4 bg-white justify-content-center align-items-center" >
                <div className="row justify-content-center align-items-center">
                    <div className="col-11">
                        <label for="validationDefaultUsername" class="form-label"></label>
                        <input type="text" class="form-control" id="validationDefaultUsername" placeholder ="Email" aria-describedby="inputGroupPrepend2" required></input>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mb-3">
                    <div className="col-11">
                        <label for="inputPassword4" class="form-label"></label>
                        <div className='input-group'>
                            <input type="password" class="form-control" placeholder="Password" id="validationDefault03" aria-describedby="inputGroupPrepend2" required></input>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center pt-2 mb-2">
                    <div className="d-grid gap-2 col-11 mx-auto">
                        <button type="submit" class="btn btn-primary btn-login">Log In</button>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center pt-2">
                    <div className="text-center">
                        <a className="link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#"> Forgot password?</a>
                    </div>
            </div>


                <div className="row justify-content-center align-items-center pt-2">
                    <div className="line"></div>
                </div>

                <div className="row justify-content-center align-items-center pt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" class="btn btn-success btn-sign">Create new account</button>
                    </div>
                </div>
            </div>           
        </div>
    );
}

export default LoginPage;

