import { Link } from "react-router-dom";
import PostCard from "../feed/postCard/PostCard";
import TopNavbar from "../feed/topNavbar/TopNavbar";

function UserProfile({loggedUser, user, token, handleInfo, handlePosts, getFriends, activeButton, userPostsList, userFriendsList, activeFriendsButton, addFriend}){
    return (
        <div>
            <TopNavbar userData={loggedUser} token={token}/>
            <div className="card user-card">
                <img src={user.profilePhoto} alt="profile" width="200" height="200" className="d-inline-block align-text-center profile-photo mr-2" id="display-user" />
                <p className="fw-bolder m-0">
                    {user.firstName} {user.lastName}
                </p>
                <div className="d-flex align-items-center justify-content-end"> 
                    {activeFriendsButton === 'Add friend' && (
                        <button className="btn col-2 friends-request btn-primary" onClick={addFriend}>
                            <i className="bi bi-person-fill-add ml-1"></i>
                            Add friend
                        </button>
                    )}
                    {activeFriendsButton === 'Requested' && (
                        <button className="btn col-2 friends-request btn-secondary" disabled>
                            <i className="bi bi-person-fill-check ml-1"></i>
                            Requested
                        </button>
                    )}
                    {activeFriendsButton === 'Confirm' && (
                        <button className="btn col-2 friends-request btn-secondary" disabled>
                            <i class="bi bi-check2-all ml-1"></i>
                            {user.firstName} sent you a friend request
                        </button>
                    )}
                    {activeFriendsButton === 'Friends' && (
                        <button className="btn col-2 friends-request btn-primary" disabled>
                            <i className="bi bi-person-check-fill ml-1"></i>
                            Friends
                        </button>
                    )}
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
                        {userPostsList ? (
                            userPostsList.map(post => (
                                <PostCard
                                    key={post._id}
                                    {...post}
                                    userData={user}
                                    token={token}
                                />
                            )) ) : ( activeFriendsButton!="friends" ? (
                                <p className="fw m-0">
                                You can't see {user.firstName}'s posts
                            </p>
                            ):(
                                <p className="fw m-0">
                                {user.firstName} has no posts yet
                            </p>
                        ))}
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
                            ) : ( activeFriendsButton!="friends" ? (
                                <p className="fw m-0">
                                You can't see {user.firstName}'s friends
                            </p>
                            ):(
                                <p className="fw m-0">
                                {user.firstName} has no friends yet
                            </p>
                            ))}
                        </div>
                </div>
            )}
        </div>
    );
}

export default UserProfile;