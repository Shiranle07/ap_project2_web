// PostPage.js
import React from 'react';
import './PostPage.css';
import Post from "../post/Post";
import posts from "../data/db.json";

function PostPage() {  
    return (
        <div className="PostPage">
            {posts.map((post) => <Post key={post.id} {...post} />)}
        </div>
    );
}

export default PostPage;
