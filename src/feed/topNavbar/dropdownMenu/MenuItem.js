import { Link } from 'react-router-dom';

function MenuItem({iconClass, text, path}){
    return(
        <li><Link class="dropdown-item" to={path}>
        <i class={iconClass}></i>
        {text}</Link></li>
    );
}
export default MenuItem;