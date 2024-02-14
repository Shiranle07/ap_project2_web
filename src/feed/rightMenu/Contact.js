import "./RightMenu.css" 

function Contact({imgSrc, name}){
    return(
        <a href="#" class="list-group-item list-group-item-action right-menu-item">
            <div class="user-info">
                <img src={imgSrc} width="40" height="40" class="d-inline-block align-text-center profile-photo"/>
                <div class="online-dot"></div>
            </div>
                <span class="username">{name}</span>
        </a>
    
    );
}
export default Contact;