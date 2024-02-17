function MenuArrowItem({iconClass, text, onClick}){
    return(
        <li><a className="dropdown-item" href="#" onClick={onClick}>
            <i className={iconClass}></i>
            {text}
            <i className="bi bi-arrow-right-short menu-arrow"></i>
            </a>
        </li>
    );
}
export default MenuArrowItem;