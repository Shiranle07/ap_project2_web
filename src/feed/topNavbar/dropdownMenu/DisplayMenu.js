import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';

function DisplayMenu({}){
    const [darkMode, setDarkMode] = useState(() => {
        // Load dark mode preference from local storage
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => {
        // Apply dark mode styles
        document.body.classList.toggle('dark-mode', darkMode);
        // Save dark mode preference to local storage
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const handleDarkModeChange = () => {
        setDarkMode(!darkMode);
    };

    
    return(
        <div>
            <MenuItem iconClass={"bi bi-moon-fill menu-icon"} text={"Dark mode"}/>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={!darkMode} onChange={handleDarkModeChange} />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Off
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={darkMode} onChange={handleDarkModeChange} />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    On
                </label>
            </div>
        </div>
    );
}

export default DisplayMenu;
