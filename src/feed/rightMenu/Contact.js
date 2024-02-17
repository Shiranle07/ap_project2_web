import "./RightMenu.css" 

function Contact({imgSrc, name}){
    return(
        <a href="#" className="list-group-item list-group-item-action right-menu-item">
            <div className="user-info">
                <img src={imgSrc} width="40" height="40" className="d-inline-block align-text-center profile-photo"/>
                <div className="online-dot"></div>
            </div>
                <span className="username">{name}</span>
        </a>
    
    );
}
export default Contact;