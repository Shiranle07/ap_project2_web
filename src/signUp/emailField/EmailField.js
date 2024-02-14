function EmailField({setEmail}){
    return(
        <div className="row">
            <div className="col-md-12 d-flex mt-2">
                <label for="validationCustomUsername" className="form-label"></label>
                <div className="input-group has-validation">
                <input name="Email" type="email" className="form-control" id="validationCustomUsername" placeholder="Email" aria-describedby="inputGroupPrepend" required onChange={(e) => setEmail(e.target.value)}></input>
                </div>
            </div>
        </div>
    );
}

export default EmailField;