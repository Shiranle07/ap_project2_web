import React, { useState, useEffect } from 'react';
import profilePhoto from "../../../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import MenuArrowItem from './MenuArrowItem';
import MenuItem from './MenuItem';
import "./DropdownMenu.css"
import DisplayMenu from './DisplayMenu';

function DropdownMenu({ userData }) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [darkMode, setDarkMode] = useState(false);

    const handleMenuChange = (event, menu) => {
        event.stopPropagation();
        setActiveMenu(menu);
    };

    const handleAccountButtonClick = () => {
        setActiveMenu('main');
    };

    useEffect(() => {
        // Apply dark mode styles
        document.body.classList.toggle('dark-mode', darkMode);
        // Save dark mode preference to local storage
    }, [darkMode]);

    return (
        <li className="nav-item dropdown">
            <a onClick={handleAccountButtonClick} className="nav-link dropdown-toggle account-dropdown" href="#" role="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={userData.ProfilePhoto ? userData.ProfilePhoto : profilePhoto} alt="profile" width="40" height="40" className="d-inline-block align-text-bottom profile-photo"></img>
                <span id="Button-info" className="helper-text">Account</span>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {activeMenu === 'main' && (
                    <>
                        <li><a className="dropdown-item" href="#">
                            <img src={userData.ProfilePhoto ? userData.ProfilePhoto : profilePhoto} alt="profile" width="40" height="40" className="d-inline-block align-text-center profile-photo " id="display-user" />
                            {userData.FirstName} {userData.LastName}</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <MenuArrowItem iconClass={"bi bi-gear-fill menu-icon"} text={"Settings & privacy"} />
                        <MenuArrowItem iconClass={"bi bi-question-circle-fill menu-icon"} text={"Help & support"} />
                        <MenuArrowItem iconClass={"bi bi-moon-fill menu-icon"} text={"Display & accessibility"} onClick={(e) => handleMenuChange(e, "display")} />
                        <MenuItem iconClass={"bi bi-chat-left-dots-fill menu-icon"} text={"Give feedback"} />
                        <MenuItem iconClass={"bi bi-box-arrow-right menu-icon"} text={"Log out"} path={"/"} />
                    </>
                )}
                {activeMenu === 'display' && (
                    <>
                        <MenuItem iconClass={"bi bi-arrow-left menu-icon"} text={"Back"} onClick={(e) => handleMenuChange(e, 'main')} />
                        <DisplayMenu darkMode={darkMode} setDarkMode={setDarkMode}/>
                        <MenuItem iconClass={"bi bi-brightness-high-fill menu-icon"} text={"Brightness"} />
                        <MenuItem iconClass={"bi bi-eye-fill menu-icon"} text={"Font size"} />
                    </>
                )}
            </ul>
        </li>
    );
}

export default DropdownMenu;
