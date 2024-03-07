import './LeftMenu.css'
import profilePhoto from "../../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import {react, useState} from 'react'
import LeftMenuItem from './LeftMenuItem';
import yoga from "./images/yoga.jpg"
import baking from "./images/baking.png"
import bioinformatics from "./images/bioinformatics.jpg"
import Shortcuts from './Shortcuts';
import { Link } from 'react-router-dom';


function LeftMenu({userData}){
    const [showMore, setShowMore] = useState(false);
    const [menuHeight, setMenuHeight] = useState(window.innerHeight);
    const toggleMenu = () => {
        setShowMore(!showMore);
    };

    return(
    <div class="left-menu-container list-group mt-2" style={{ height: menuHeight - 85}}>
        <Link to='/user' className="list-group-item list-group-item-action left-menu-item">
            <img src={userData.ProfilePhoto ? userData.ProfilePhoto : profilePhoto} alt="profile" width="40" height="40" class="d-inline-block align-text-center    profile-photo " id="display-user"></img>
             {userData.FirstName} {userData.LastName}
        </Link>

        <LeftMenuItem classIcon={"bi bi-person-fill icon-menu"} text={"Friends"}/>
        <LeftMenuItem classIcon={"bi bi-clock icon-menu"} text={"Memories"}/>
        <LeftMenuItem classIcon={"bi bi-bookmark-fill icon-menu"} text={"Saved"} id={"saved-icon"}/>
        <LeftMenuItem classIcon={"bi bi-people-fill icon-menu"} text={"Groups"}/>
        <LeftMenuItem classIcon={"bi bi-play-btn icon-menu"} text={"Video"}/>

        {showMore && (
                <>
                    <LeftMenuItem classIcon={"bi bi-bar-chart-fill icon-menu"} text={"Ads Manager"}/>
                    <LeftMenuItem classIcon={"bi bi-droplet-fill icon-menu"} text={"Blood Donation"} id={"blood-icon"}/>
                    <LeftMenuItem classIcon={"bi bi-globe-central-south-asia icon-menu"} text={"Climate Science Center"}/>
                    <LeftMenuItem classIcon={"bi bi-calendar-heart icon-menu"} text={"Events"} id={"events-icon"}/>
                    <LeftMenuItem classIcon={"bi bi-menu-button-wide-fill icon-menu"} text={"Feeds"}/>
                    <LeftMenuItem classIcon={"bi bi-bag-heart icon-menu"} text={"Fundraisers"} id={"fundraisers-icon"}/>
                    <LeftMenuItem classIcon={"bi bi-boxes icon-menu"} text={"Gaming Video"}/>
                    <LeftMenuItem classIcon={"bi bi-cart4 icon-menu"} text={"Marketplace"}/>
                    <LeftMenuItem classIcon={"bi bi-messenger icon-menu"} text={"Messenger"} id={"messenger-icon"}/>
                    <LeftMenuItem classIcon={"bi bi-wallet2 icon-menu"} text={"Orders and payments"} id={"wallet-icon"}/>
                    <LeftMenuItem classIcon={"bi bi-flag-fill icon-menu"} text={"Pages"} id={"flag-icon"}/>
                    <LeftMenuItem classIcon={"bi bi-controller icon-menu"} text={"Play games"}/>
                    <LeftMenuItem classIcon={"bi bi-image icon-menu"} text={"Recent ad activity"}/>

                </>
            )}

        <button class="list-group-item list-group-item-action left-menu-item" onClick={toggleMenu}>
        {showMore ? <span> <i class="bi bi-caret-up-fill"></i> See less</span> : 
         <span> <i class="bi bi-caret-down-fill"></i> See more</span> }
            </button>

        <hr></hr>
        <p className='fw-bolder shortcuts-title'>
            Your shortcuts
        </p>
        <Shortcuts imgSrc={yoga} text={"Yoga for begginers"}/>
        <Shortcuts imgSrc={baking} text={"Baking together"}/>
        <Shortcuts imgSrc={bioinformatics} text={"Bioinformatics world"}/>

    </div>
    );
}   
export default LeftMenu;