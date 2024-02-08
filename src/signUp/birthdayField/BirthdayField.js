import "./BirthdayField.css"

function BirthdayField(){
    return(
        <div className="row birthday">
            <div className="col-md-12">
                <label htmlFor="exampleDate" className="form-label birthday">Birthday</label>
                <input type="date" className="form-control" id="exampleDate" required></input>
            </div>
        </div>
    );
}

export default BirthdayField;