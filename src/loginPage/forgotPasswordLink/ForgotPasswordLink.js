import "./ForgotPasswordLink.css"

function ForgotPasswordLink(){
    return(
        <div className="row justify-content-center align-items-center pt-2">
            <div className="text-center">
                <a className="link-offset-2 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" id="forgot-password" href=""> Forgot password?</a>
            </div>
        </div>
    );
}
export default ForgotPasswordLink;