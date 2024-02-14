function PostAdditionals({iconClass, text, id}){
    return(
        <div className="post-add-btn">
        <i class={iconClass} id={id}></i>
            <span id="Button-info" className="helper-text">
                    {text}
            </span>
        </div>
    );
}
export default PostAdditionals;