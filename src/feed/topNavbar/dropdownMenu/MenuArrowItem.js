function MenuArrowItem({iconClass, text, onClick}){
    return(
        <li><a class="dropdown-item" onClick={onClick}>
            <i class={iconClass}></i>
            {text}
            <i class="bi bi-arrow-right-short menu-arrow"></i>
            </a>
        </li>
    );
}
export default MenuArrowItem;