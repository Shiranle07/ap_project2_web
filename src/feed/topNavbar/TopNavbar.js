import logo from "../logo.svg"
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import CenterButtons from "./CenterButtons";
import LeftButtons from "./LeftButtons";
import "./TopNavbar.css"
import DropdownMenu from "./dropdownMenu/DropdownMenu";


function TopNavbar({userData, token}){
    const navigate = useNavigate();
    console.log("token and user from navbar:", token)
    const onHomeClick = () => {
        navigate('/posts', { state: { user: userData, token: token } });
    }
    console.log("user from navbar", userData)
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
                        <input class="form-control search-bar" type="search" placeholder="Search in Fakebook" aria-label="Search"></input>
                </form>
                <ul className='navbar-nav justify-content-center'>
                    <CenterButtons iconClass={"bi bi-house-door-fill"} infoText={"Home"} id="home-button" onClick={onHomeClick}/>
                    <CenterButtons iconClass={"bi bi-play-btn"} infoText={"Video"}/>
                    <CenterButtons iconClass={"bi bi-cart4"} infoText={"Marketplace"}/>
                    <CenterButtons iconClass={"bi bi-people"} infoText={"Groups"}/>
                    <CenterButtons iconClass={"bi bi-controller"} infoText={"Gaming"}/>
                </ul>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <LeftButtons iconClass={"bi bi-grid-3x3-gap-fill"} infoText={"Manu"}/>
                    <LeftButtons iconClass={"bi bi-messenger"} infoText={"Messenger"}/>
                    <LeftButtons iconClass={"bi bi-bell-fill"} infoText={"Notifications"}/>
                    <DropdownMenu userData={userData}/>
                </ul>
            </div>
        </div>
    </nav>
    );
}
export default TopNavbar;