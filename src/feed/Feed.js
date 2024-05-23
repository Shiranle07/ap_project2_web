import { useNavigate, useLocation } from 'react-router-dom';
import './Feed.css'
import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import TopNavbar from './topNavbar/TopNavbar';
import LeftMenu from './leftMenu/LeftMenu';
import RightMenu from './rightMenu/RightMenu';
import CreatePostField from './createPost/createPostField/CreatePostField';
import CreatePostWindow from './createPost/createPostWindow/CreatePostWindow';
import LoginLogo from '../loginPage/loginLogo/LoginLogo';
import PostCard from "./postCard/PostCard";

function Feed({postsList, setPostsList, getPosts}) {
    const location = useLocation();
    const userData = location.state?.user;
    const token = location.state?.token || null;
    console.log("Token received in Feed component:", token)
    console.log("The looged in user:", userData)
    
    if (!token) {
        return( 
            <div>
                <div className='form-box col-4 d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='error-noLogIn'>
                You must log in first
                </h2>
                <Link to="/tokens" style={{ display: 'block', textAlign: 'center', margin: '10px 0' }}>
                    <button className='btn btn-primary'>
                        Click here to log in
                    </button>
                    </Link>
                </div>
                <LoginLogo/>
            </div>
        );
    }
    
    const addCommentToPost = (postId, comment_id, newComment) => {
        const postIndex = postsList.findIndex(post => post.post_id === postId);
        if (postIndex !== -1) {
            // Create a new array with the updated post at the correct index
            const updatedPosts = [...postsList];
            // Find the post where the new comment will be added
            const postToUpdate = updatedPosts[postIndex];
            // Create a new comments array with the existing comments plus the new comment
            const updatedComments = [
                ...postToUpdate.comments,
                {
                    comment_id: comment_id, // Use the comment_id of the new comment
                    commenter_firstName: userData.firstName,
                    commenter_lastName: userData.lastName,
                    commenter_photo: userData.profilePhoto,
                    commentBody: newComment
                }
            ];
            // Update the post with the new comments array
            updatedPosts[postIndex] = {
                ...postToUpdate,
                comments: updatedComments
            };
            // Update the state with the new array of posts
            setPostsList(updatedPosts);
        }
        
    };

    const deleteCommentFromPost = (postId, commentIdToDelete) => {
        // Find the index of the post in the postsList array
        const postIndex = postsList.findIndex(post => post.post_id === postId);
        if (postIndex !== -1) {
            // Create a new array with the updated post at the correct index
            const updatedPosts = [...postsList];
            // Find the post where the comment will be deleted
            const postToUpdate = updatedPosts[postIndex];
            // Filter out the comment to delete from the comments array
            const updatedComments = postToUpdate.comments.filter(comment => comment.comment_id !== commentIdToDelete);
            // Update the post with the new comments array
            updatedPosts[postIndex] = {
                ...postToUpdate,
                comments: updatedComments
            };
            // Update the state with the new array of posts
            setPostsList(updatedPosts);
        }
    };
    
    async function onDeletePost(postId) {
        console.log(`deleting post... ${postId}`);
        const res = await fetch(`http://localhost:8080/api/posts/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json",
                'authorization': 'Bearer ' + token // attach the token
            }
        });
        if (res.status !== 200) {
            alert("You can't delete someone else's post!");
            return;
          }

        await getPosts(token);

    };
  
    async function onEditPost(postId, newPostContent, newPostPhoto){
        const res = await fetch(`http://localhost:8080/api/posts/${postId}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
                'authorization': 'bearer ' + token // attach the token
            },
            body: JSON.stringify({postBody: newPostContent, postPhoto: newPostPhoto})
        });
        if (res.status !== 200) {
            const errorData = await res.json();
            const errorMessage = errorData.errors.join(', ');
            alert('Error: ' + errorMessage);
            return;
          }
        await getPosts(token);

    };


    
    return (
        <div>
            <TopNavbar userData={userData} token={token}/>
            <div className='feed-container'>
                <div className='row'>
                    <div className='col-3 left-section'>
                        <LeftMenu userData={userData}/>
                    </div>
                    <div className='col-6 middle-section'>
                        <CreatePostField userData={userData}/>
                        <div className='post-list'>
                            {console.log("Printing posts:", postsList)}
                            {postsList.map(post => (
                                <PostCard
                                    key={post._id}
                                    {...post}
                                    onDeletePost={onDeletePost}
                                    onEditPost={onEditPost}
                                    userData={userData}
                                    addCommentToPost={addCommentToPost}
                                    deleteCommentFromPost={deleteCommentFromPost}
                                    token={token}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='col-3 right-section'>
                        <RightMenu/>    
                    </div>
                </div>
            </div>
            
            <CreatePostWindow userToken={token} userData={userData} postsList={postsList} setPostsList={setPostsList} getPosts={getPosts}/>
            </div>
    );
}

export default Feed;
