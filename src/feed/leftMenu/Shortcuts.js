function Shortcuts({imgSrc, text}){
    return(
        <a href="#" className="list-group-item list-group-item-action left-menu-item">
        <img src={imgSrc} width="50" height="50" className="d-inline-block align-text-center shortcut-photo" ></img>
        {text}
    </a>
    );
}
export default Shortcuts;