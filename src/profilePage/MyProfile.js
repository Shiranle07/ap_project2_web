import { Link } from "react-router-dom";
import PostCard from "../feed/postCard/PostCard";
import TopNavbar from "../feed/topNavbar/TopNavbar";
import DeleteUserModal from "./DeleteUserModal";
import EditUserWindow from "./EditUserWindow";

function MyProfile({loggedUser, user, token, handleInfo, handlePosts, getFriends, activeButton, userPostsList, userFriendsList}){
    return (
        <div>
            <TopNavbar userData={loggedUser} token={token}/>
            <div className="card user-card">
                <img src={user.profilePhoto} alt="profile" width="200" height="200" className="d-inline-block align-text-center profile-photo mr-2" id="display-user" />
                <p className="fw-bolder m-0">
                    {user.firstName} {user.lastName}
                </p>
                <div className="editAndDelete d-flex align-items-center justify-content-end">
                    <button className="btn" data-bs-toggle="modal" data-bs-target={`#editUser`}>
                        <i class="bi bi-pencil editAndDelete-icon"></i>
                         </button>
                        <EditUserWindow user={user} token={token}/>
                    <button className="btn" data-bs-toggle="modal" data-bs-target={`#deleteUser}`}>
                        <i class="bi bi-trash3 editAndDelete-icon"></i>
                        </button>
                        <DeleteUserModal/>
                    </div>
                <hr />
                <div className="row">
                    <button  className={`btn profile-options col-1 ${activeButton === 'About' ? 'active' : ''}`} onClick={() => handleInfo('About')}>About</button>
                    <button className={`btn profile-options col-1 ${activeButton === 'Posts' ? 'active' : ''}`} onClick={() => handlePosts('Posts')}>Posts</button>
                    <button className={`btn profile-options col-1 ${activeButton === 'Friends' ? 'active' : ''}`} onClick={() => getFriends('Friends')}>Friends</button>
                    <Link className="btn profile-options col-1">Photos</Link>
                    <Link className="btn profile-options col-1">Videos</Link>
                    <Link className="btn profile-options col-1">Check-ins</Link>
                    <Link className="btn profile-options col-1">More</Link>
                </div>
            </div>

            {activeButton === 'Posts' && (
                <div className="row align-content-center justify-content-center">
                    <div className="card posts-card col-10">
                        <p className="fw-bolder m-0">
                            Posts
                        </p>
                    </div>
                    <div className="col-10"> 
                        {userPostsList &&(
                            userPostsList.map(post => (
                                <PostCard
                                    key={post._id}
                                    {...post}
                                    userData={user}
                                    token={token}
                                />
                            ))
                        )}
                    </div>
                    </div>

            )}

            {activeButton === 'Friends' && (
                <div className="row align-content-center justify-content-center">
                    <div className="card posts-card col-10">
                        <p className="fw-bolder m-0">
                            Friends
                        </p>
                    </div>
                    <div className="col-10"> 
                        {userFriendsList ? (
                            userFriendsList.map(friend => (
                                <div className="card posts-card col-10">
                                     <img src={friend.profilePhoto} alt="profile" width="40" height="40" class="d-inline-block align-text-center    profile-photo " id="display-user"></img>
                                    {friend.firstName} {friend.lastName}
                                </div>
                            ))
                        ) : (
                            <p className="fw m-0">
                            {user.firstName} has no friends yet
                        </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyProfile;