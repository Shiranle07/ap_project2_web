import React, { useState } from 'react';

function ProfilePhotoField({ setProfilePhoto }) {
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setPreview(reader.result);
                setProfilePhoto(reader.result);
                console.log("photo:", reader.result);
            };
        } else {
            setPreview(null);
        }
    };

    return (
        <div className="row justify-content-center align-items-center form-field" id="photo-field">
            <div className="col-md-6 d-flex mt-2">
                <label htmlFor="formFile" className="form-label"></label>
                <input
                    name="ProfilePhoto"
                    className="form-control upload-photo"
                    type="file"
                    id="formFile"
                    onChange={handleFileChange}
                ></input>
            </div>
            <div className="col-md-6 mt-2">
                <div className="preview-window">
                    <p className="preview-title">Preview:</p>
                    {preview && (
                        <img src={preview} alt="Preview" className="preview-image" style={{ maxWidth: '100%', maxHeight: '100px' }}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfilePhotoField;
