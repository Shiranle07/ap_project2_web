import profilePhoto from "../../signUp/profilePhotoField/defaultProfilePhoto.jpg";
import DeletePostModal from "./DeletePostModal";
import ShareOption from './ShareOption';
import EditPostWindow from "./EditPostWindow";
import "./PostComponent.css"


function PostComponent({post_id, user_firstName, user_lastName, user_photo, postBody, postPhoto, likesNumber, commentsNumber, publication_date, isLiked, setIsLiked, onDeletePost, onEditPost}){
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    return(
        <div>
        <div className="editAndDelete">
        <button className="btn" data-bs-toggle="modal" data-bs-target={`#editPost-${post_id}`}>
            <i className="bi bi-pencil editAndDelete-icon"></i>
            </button>
            <EditPostWindow post_id={post_id} user_firstName={user_firstName} user_lastName={user_lastName} user_photo={user_photo} postBody={postBody} postPhoto={postPhoto} onEditPost={onEditPost}/>
        <button className="btn" data-bs-toggle="modal" data-bs-target={`#confirmDelete-${post_id}`}>
            <i className="bi bi-trash3 editAndDelete-icon"></i>
            </button>
                <DeletePostModal onDeletePost={onDeletePost} post_id={post_id}/>
        </div>
        <div className="d-flex align-items-center">
            <img src={user_photo ? user_photo : profilePhoto} alt="profile" width="40" height="40" className="d-inline-block align-text-center profile-photo mr-2" id="display-user"></img>
            <p className="fw-bolder m-0">
                {user_firstName} {user_lastName}
            </p>
        </div>
        <p className="card-subtitle mt-1 post-date">{publication_date}</p>
        <br></br>
        <p className="card-text pt-2">{postBody}</p>
        {postPhoto && (
            <div className="photo-window d-flex justify-content-center align-items-center">
                <img src={postPhoto} alt="Photo" className="image" style={{ maxWidth: '100%', maxHeight: '500px', margin: 'auto' }} />
            </div>
        )}

        <div className="like-and-comment mt-2">
            <span className="card-link like-info">
                <i className="bi bi-hand-thumbs-up-fill like-icon"></i>
                {isLiked && likesNumber === 0 ? 'You liked this post' : (isLiked ? `You and ${likesNumber} others` : likesNumber)}
            </span>
            <a href="#" className="card-link comments-info">{commentsNumber} comments</a>
        </div>
        <hr></hr>
        <div className="btn-row d-flex justify-content-between">
            <button
                className="btn btn-post-card align-items-center" onClick={handleLikeClick}>
                <i className={`text-primary ${isLiked ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up"}`}></i>
                <span className={isLiked ? "liked-text" : ""}>Like</span>
            </button>
            <button type="button" className="btn btn-post-card align-items-center transparent-bg" data-bs-toggle="modal" data-bs-target={`#exampleModalToggle-post-${post_id}`}>
                <i className="bi bi-chat text-primary"></i>
                Comment
            </button>
            <div className="dropup">
                <button className="btn btn-secondary dropdown-toggle bg-transparent p-2" type="button" id="shareDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-share text-primary"></i>
                    <span className="ms-2 share-text"> Share </span>
                </button>
                <ul className="dropdown-menu share-menu" aria-labelledby="shareDropdown">
                    <ShareOption iconClass={"bi bi-send"} text={"Share now (only me)"}/>
                    <ShareOption iconClass={"bi bi-pencil-square"} text={"Share to Feed"}/>
                    <ShareOption iconClass={"bi bi-messenger"} text={"Send in Messenger"}/>
                    <ShareOption iconClass={"bi bi-whatsapp"} text={"Send in Whatsapp"}/>
                    <ShareOption iconClass={"bi bi-instagram"} text={"Share to Fakegram"}/>
                    <ShareOption iconClass={"bi bi-flag"} text={"Share to a Page"}/>
                    <ShareOption iconClass={"bi bi-people"} text={"Share to a group"}/>
                    <ShareOption iconClass={"bi bi-person"} text={"Share on a friend's profile"}/>
                    <ShareOption iconClass={"bi bi-twitter"} text={"Send in Twitter"}/>
                    <ShareOption iconClass={"bi bi-link"} text={"Copy link"}/>
                </ul>
            </div>
        </div>
    </div>
    );
}
export default PostComponent;