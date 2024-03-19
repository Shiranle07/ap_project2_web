import { Link } from "react-router-dom";
import PostCard from "../feed/postCard/PostCard";
import TopNavbar from "../feed/topNavbar/TopNavbar";
import DeleteUserModal from "./DeleteUserModal";
import EditUserWindow from "./EditUserWindow";

function MyProfile({loggedUser, user, token, handleInfo, handlePosts, getFriends, activeButton, userPostsList, userFriendsList, userReqList}){
    const confirm = async(fid) => {
        const res = await fetch(`http://localhost:8080/api/users/${user.email}/friends/${fid}`,{
            "method" : "PATCH",
            headers: {
                "Content-Type" : "application/json",
                'authorization': 'bearer ' + token // attach the token
            }
        })
        getFriends('Friends');
    }
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
                    <button className="btn" data-bs-toggle="modal" data-bs-target={`#deleteUser`}>
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
                <div>
                <div className="row align-content-center justify-content-center">
                    <div className="card posts-card col-10">
                        <p className="fw-bolder m-0">
                            Friends
                        </p>
                    </div>
                    <div className="row col-10 d-flex align-items-center"> 
                        {userFriendsList | userFriendsList.length>0 ? (
                            userFriendsList.map(friend => (
                    <div className="card friends-card col-10 d-flex p-2">
                        <span className="friend-display">
                        <button className="btn deleteF">
                        <i className="bi bi-trash3 editAndDelete-icon"></i>
                        </button>
                            <img
                                src={friend.profilePhoto}
                                alt="profile"
                                width="100"
                                height="100"
                                className="d-inline-block align-text-center friend-photo m-2"
                                id="display-friend"
                            />                   
                            {friend.firstName} {friend.lastName}
                        </span> 
                    </div>
                            ))
                        ) : (
                            <p className="fw m-0">
                            {user.firstName} has no friends yet
                        </p>
                        )}
                    </div>
                </div>
                                <div className="row align-content-center justify-content-center">
                                <div className="card posts-card col-10">
                                    <p className="fw-bolder m-0">
                                        Friend Requests
                                    </p>
                                </div>
                                <div className="col-10"> 
                                    {userReqList ? (
                                        userReqList.map(req => (
                                            <div className="card friends-card col-10 d-flex p-2">
                                            <span className="friend-display col-6">
                                            <img
                                                 src={req.profilePhoto}
                                                 alt="profile"
                                                 width="100"
                                                 height="100"
                                                 className="d-inline-block align-text-center friend-photo m-2"
                                                 id="display-friend"
                                             />                   
                                              {req.firstName} {req.lastName}
                                             </span>
                                             <div class="buttons-container ml-auto">
                                            <button className="req-btn btn btn-secondary col-2 m-1">
                                                    Delete
                                                </button>
                                                <button className="req-btn btn btn-primary col-2 m-1" onClick={() => confirm(req.email)}>
                                                    Confirm
                                                </button>

                                            </div> 
                                         </div>
                                        ))
                                    ) : (
                                        <p className="fw m-0">
                                        You don't have friend requests
                                    </p>
                                    )}
                                </div>
                            </div>
                            </div>
            )}
        </div>
    );
}

export default MyProfile;