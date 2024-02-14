import "./ErrorMessage.css"

function ErrorMessage({error}){
    return(
        <div className="row justify-content-center align-items-center mt-1 mb-3">
        <div className="col-11">
            <div className="error-message">{error}</div>
        </div>
    </div>
    );
}
export default ErrorMessage;