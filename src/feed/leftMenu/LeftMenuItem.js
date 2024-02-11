function LeftMenuItem({classIcon, text, id}){
    return(
        <a href="#" class="list-group-item list-group-item-action left-menu-item">
        <i class={classIcon} id={id}></i>
            {text}</a>
    );
}
export default LeftMenuItem;