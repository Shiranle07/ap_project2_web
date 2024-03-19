import { Link } from 'react-router-dom';

function MenuItem({iconClass, text, path, onClick}){
    return(
        <li><Link className="dropdown-item" to={path} onClick={onClick}>
        <i class={iconClass}></i>
        {text}</Link></li>
    );
}
export default MenuItem;