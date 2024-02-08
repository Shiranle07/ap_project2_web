function ProfilePhotoField(){
    return(
        <div className="row justify-content-center align-items-center">
            <div className="col-mb-12 d-flex mt-2">
                <label htmlFor="formFile" className="form-label"></label>
                <input name="ProfilePhoto" className="form-control upload-photo" type="file" id="formFile"></input>
            </div>
        </div>
    );
}

export default ProfilePhotoField;