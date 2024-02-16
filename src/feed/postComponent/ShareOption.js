function ShareOption({iconClass, text}) {
    return(
        <li><a class="dropdown-item share-option" href="#">
        <i class={iconClass}></i>
            {text}</a></li>
    );
}
export default ShareOption;