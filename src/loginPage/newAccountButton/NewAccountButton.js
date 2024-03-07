import "./NewAccountButton.css"
import {useNavigate} from 'react-router-dom';

function NewAccountButton({}){
    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate('/users')
    }
    return(
        <div className="new-account row justify-content-center align-items-center">
            <div className="d-grid gap-2 col-6 mx-auto">
                <button type="button" className="btn btn-success btn-sign" onClick={handleClick} >Create new account
                </button>
            </div>
        </div>
    );
}
export default NewAccountButton;