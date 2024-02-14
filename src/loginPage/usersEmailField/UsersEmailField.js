function UsersEmailField({email, setEmail}){
    return(
        <div className="row justify-content-center align-items-center">
            <div className="col-11">
                <label htmlFor="validationDefaultUsername" className="form-label"></label>
                <input
                    type="text"
                    className="form-control"
                    id="validationDefaultUsername"
                    value={email}
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend2"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </div>
    );
}
export default UsersEmailField;