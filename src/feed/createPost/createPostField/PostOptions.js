function PostOptions({iconClass, text, id}){
    return(
        <button type="button" className='nav-item btn btn-outline post-btn col-4'>
        <i className={iconClass} id={id}></i>
        {text}
        </button>
    );
}
export default PostOptions;