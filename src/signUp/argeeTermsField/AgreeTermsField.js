import './AgreeTermsField.css';

function AgreeTermsField(){
    return(
        <div className="row agree-terms">
            <div className="col-12">
                <div className="form-check d-flex">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
                    <label className="form-check-label" htmlFor="invalidCheck2">
                        Agree to terms and conditions
                    </label>
                </div>
            </div>
        </div>
    );
}

export default AgreeTermsField;