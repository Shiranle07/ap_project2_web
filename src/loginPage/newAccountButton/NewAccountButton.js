import "./NewAccountButton.css"

function NewAccountButton({toggleForm}){
    return(
        <div className="new-account row justify-content-center align-items-center">
            <div className="d-grid gap-2 col-6 mx-auto">
                {/* toggleForm function changes the shown form, from sign up to log in and vica verca */}
                <button type="button" className="btn btn-success btn-sign" onClick={toggleForm} >Create new account
                </button>
            </div>
        </div>
    );
}
export default NewAccountButton;