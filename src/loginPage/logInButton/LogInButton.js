import "./LogInButton.css"

function LogInButton(){
    return(
        <div className="row justify-content-center align-items-center mt-3">
            <div className="d-grid col-11">
                <button type="submit" className="btn btn-primary btn-login">Log In</button>
            </div>
        </div>
    );
}
export default LogInButton;