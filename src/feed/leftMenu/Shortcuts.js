function Shortcuts({imgSrc, text}){
    return(
        <a href="#" class="list-group-item list-group-item-action left-menu-item">
        <img src={imgSrc} width="50" height="50" class="d-inline-block align-text-center shortcut-photo" ></img>
        {text}
    </a>
    );
}
export default Shortcuts;