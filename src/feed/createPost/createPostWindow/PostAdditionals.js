function PostAdditionals({iconClass, text, id, onClick}){
    return(
        <div className="post-add-btn">
        <i className={iconClass} id={id} onClick={onClick}></i>
            <span id="Button-info" className="helper-text">
                    {text}
            </span>
        </div>
    );
}
export default PostAdditionals;