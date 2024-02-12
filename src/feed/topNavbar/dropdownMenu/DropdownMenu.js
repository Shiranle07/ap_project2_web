import profilePhoto from "../../../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import MenuArrowItem from './MenuArrowItem';
import MenuItem from './MenuItem';
import "./DropdownMenu.css"

function DropdownMenu({userData}){
    return(
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle account-dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={profilePhoto} alt="profile" width="40" height="40" class="d-inline-block align-text-bottom profile-photo"></img>
                <span id="Button-info" className="helper-text">
                            Account
                </span>
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">
                <img src={profilePhoto} alt="profile" width="40" height="40" class="d-inline-block align-text-center profile-photo " id="display-user"></img>
                    {userData.FirstName} {userData.LastName}</a></li>
                <li><hr class="dropdown-divider"></hr></li>
                    <MenuArrowItem iconClass={"bi bi-gear-fill menu-icon"} text={"Settings & privacy"}/>
                    <MenuArrowItem iconClass={"bi bi-question-circle-fill menu-icon"} text={"Help & support"}/>
                    <MenuArrowItem iconClass={"bi bi-moon-fill menu-icon"} text={"Display & accessibility"}/>
                    <MenuItem iconClass={"bi bi-chat-left-dots-fill menu-icon"} text={"Give feedback"}/>
                    <MenuItem iconClass={"bi bi-box-arrow-right menu-icon"} text={"Log out"} path={"/"}/>
            </ul>
        </li>
    );
}
export default DropdownMenu;