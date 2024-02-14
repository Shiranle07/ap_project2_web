import "./GenderField.css"

function GenderField({option1, option2, option3}){
    return(
        <div className="row check-box-gender">Gender
        <div className="col-md-12 d-flex">
            <div className="form-check btn-group align-items-center col-4" role="group">
                <label className="form-check-label btn btn-outline-secondary gender-btn" htmlFor="gridRadios1">
                    {option1}
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"></input>
                </label>
            </div>
            <div className="form-check btn-group align-items-center col-4" role="group">
                <label className="form-check-label btn btn-outline-secondary gender-btn" htmlFor="gridRadios2">
                    {option2}
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                </label>
            </div>
            <div className="form-check btn-group align-items-center col-4" role="group">
                <label className="form-check-label btn btn-outline-secondary gender-btn" htmlFor="gridRadios3">
                    {option3}
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"></input>
                </label>
            </div>
        </div>
    </div>
    );
}

export default GenderField;