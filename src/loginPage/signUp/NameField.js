function NameField({title}){
    return(
        <div className="col-md-6 d-flex">
            <label for="validationCustom01" className="form-label"></label>
            <input name={title} type="text" className="form-control" id="validationCustom01" placeholder={title} required></input>
        </div>
    );
}

export default NameField;