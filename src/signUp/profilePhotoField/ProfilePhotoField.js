import React, { useState } from 'react';
import defaultProfilePhoto from './defaultProfilePhoto.jpg'; // Import your default photo

function ProfilePhotoField({ setProfilePhoto }) {
    const [preview, setPreview] = useState();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                setProfilePhoto(reader.result);
          
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
            setProfilePhoto(null);
        }
    };


    return (
        <div className="row justify-content-center align-items-center form-field" id="photo-field">
            <div className="col-md-6 d-flex mt-2">
                <label htmlFor="formFile" className="form-label"></label>
                <input
                    name="ProfilePhoto"
                    className="form-control upload-photo"a
                    type="file"
                    id="formFile"
                    onChange={handleFileChange}
                ></input>
            </div>
            <div className="col-md-6 mt-2">
                <div className="preview-window">
                    <p className="preview-title">Preview:</p>
                    {preview ? (
                        <img src={preview} alt="Preview" className="preview-image" style={{ maxWidth: '100%', maxHeight: '100px' }}/>
                    ) : (
                        <img src={defaultProfilePhoto} alt="Default" className="preview-image" style={{ maxWidth: '100%', maxHeight: '100px' }}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfilePhotoField;
