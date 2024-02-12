function MenuArrowItem({iconClass, text}){
    return(
        <li><a class="dropdown-item" href="#">
            <i class={iconClass}></i>
            {text}
            <i class="bi bi-arrow-right-short menu-arrow"></i>
            </a>
        </li>
    );
}
export default MenuArrowItem;