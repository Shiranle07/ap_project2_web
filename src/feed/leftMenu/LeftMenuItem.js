function LeftMenuItem({classIcon, text, id}){
    return(
        <a href="#" className="list-group-item list-group-item-action left-menu-item">
        <i className={classIcon} id={id}></i>
            {text}</a>
    );
}
export default LeftMenuItem;