function ShareOption({iconClass, text}) {
    return(
        <li><a className="dropdown-item share-option" href="#">
        <i className={iconClass}></i>
            {text}</a></li>
    );
}
export default ShareOption;