import "./LeftButtons.css"

function LeftButtons({iconClass, infoText}){
    return(
        <button type="button" className='nav-item btn btn-outline nav-left'>
        <i className={iconClass}></i>
            <span id="Button-info" className="helper-text">
                    {infoText}
            </span>
        </button>
    );
}
export default LeftButtons;