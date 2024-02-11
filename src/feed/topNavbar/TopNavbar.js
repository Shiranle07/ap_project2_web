import profilePhoto from "../../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import logo from "../logo.svg"
import { Link } from 'react-router-dom';
import React from 'react';
import CenterButtons from "./CenterButtons";
import LeftButtons from "./LeftButtons";


function TopNavbar({userData}){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container-fluid">
            <a class="fakebook-brand m-1" href="#">
            <img src={logo} alt="Logo" width="50" height="44" class="d-inline-block align-text-top"></img>
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="d-flex" role="search">
                        <span class="input-group-text">
                            <i class="bi bi-search mb-3"></i>
                        </span>
                        <input class="form-control search-bar" type="search" placeholder="Search Fakebook" aria-label="Search"></input>
                </form>
                <ul className='navbar-nav justify-content-center'>
                    <CenterButtons iconClass={"bi bi-house-door-fill"} infoText={"Home"} id="home-button"/>
                    <CenterButtons iconClass={"bi bi-play-btn"} infoText={"Video"}/>
                    <CenterButtons iconClass={"bi bi-cart4"} infoText={"Marketplace"}/>
                    <CenterButtons iconClass={"bi bi-people"} infoText={"Groups"}/>
                    <CenterButtons iconClass={"bi bi-controller"} infoText={"Gaming"}/>
                </ul>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <LeftButtons iconClass={"bi bi-grid-3x3-gap-fill"} infoText={"Manu"}/>
                    <LeftButtons iconClass={"bi bi-messenger"} infoText={"Messenger"}/>
                    <LeftButtons iconClass={"bi bi-bell-fill"} infoText={"Notifications"}/>
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
                            <li><a class="dropdown-item" href="#">
                                <i class="bi bi-gear-fill menu-icon"></i>
                                Settings & privacy
                                <i class="bi bi-arrow-right-short menu-arrow"></i>
                            </a></li>
                            <li><a class="dropdown-item" href="#">
                                <i class="bi bi-question-circle-fill menu-icon"></i>
                                Help & support
                                <i class="bi bi-arrow-right-short menu-arrow"></i>
                                </a></li>
                            <li><a class="dropdown-item" href="#">
                                <i class="bi bi-moon-fill menu-icon"></i>
                                Display & accessibility
                                <i class="bi bi-arrow-right-short menu-arrow"></i>
                                </a></li>
                            <li><a class="dropdown-item" href="#">
                                <i class="bi bi-chat-left-dots-fill menu-icon"></i>
                                Give feedback</a></li>
                            <li><Link class="dropdown-item" to="/">
                                <i class="bi bi-box-arrow-right menu-icon"></i>
                                Log out</Link></li>
                    </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
export default TopNavbar;