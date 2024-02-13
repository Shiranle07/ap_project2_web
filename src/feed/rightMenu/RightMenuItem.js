function RightMenuItem({imgSrc, text1, text2}){
    return(
        <a href="#" class="list-group-item list-group-item-action d-flex align-items-center right-menu-item">
        <img src={imgSrc} width="115" height="115" class="d-inline-block align-text-center shortcut-photo"></img>
        {text1}
        <br></br>
        {text2}
    </a>
    );
}
export default RightMenuItem;