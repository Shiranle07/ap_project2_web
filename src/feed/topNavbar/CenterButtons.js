import "./CenterButtons.css"

function CenterButtons({iconClass, infoText, id, onClick}){
    return(
        <button type="button" className='nav-item btn btn-outline nav-center' id={id}>
        <i class={iconClass} onClick={onClick}></i>
        <span id="Button-info" className="helper-text">
            {infoText}
        </span>
    </button>
    );
}
export default CenterButtons;