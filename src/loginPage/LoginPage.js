import './LoginPage.css';

function LoginPage(){
    return(
        <div className='form-box col-4 justify-content-center align-items-center'>
            <form className="needs-validation" >
                <div className="row justify-content-center align-items-center">
                    <div className="col-11">
                        <label for="validationDefaultUsername" className="form-label"></label>
                        <input type="text" className="form-control" id="validationDefaultUsername" placeholder ="Email" aria-describedby="inputGroupPrepend2" required></input>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center mb-3">
                    <div className="col-11">
                        <label for="inputPassword4" className="form-label"></label>
                        <div className='input-group'>
                            <input type="password" className="form-control" placeholder="Password" id="validationDefault03" aria-describedby="inputGroupPrepend2" required></input>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center pt-2 mb-2">
                    <div className="d-grid gap-2 col-11 mx-auto">
                        <button type="submit" className="btn btn-primary btn-login">Log In</button>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center pt-2">
                    <div className="text-center">
                        <a className="link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#"> Forgot password?</a>
                    </div>
                </div>
            </form> 

            <div className="new-account row justify-content-center align-items-center pt-2">
                <div className="line"></div>
            </div>

            <div className="new-account row justify-content-center align-items-center pt-2">
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-success btn-sign">Create new account</button>
                </div>
            </div>
          
        </div>
    );
}

export default LoginPage;

