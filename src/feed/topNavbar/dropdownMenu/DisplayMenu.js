import React from 'react';
import MenuItem from './MenuItem';

function DisplayMenu({ darkMode, setDarkMode }) {
    const handleDarkModeChange = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    };

    return (
        <div>
            <MenuItem iconClass={"bi bi-moon-fill menu-icon"} text={"Dark mode"} />
            <div className='row choose-mode'>
                <div className='col-11'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={!darkMode} onChange={handleDarkModeChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Off
                        </label>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-11 choose-mode'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={darkMode} onChange={handleDarkModeChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            On
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayMenu;
