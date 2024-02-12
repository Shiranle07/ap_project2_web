import './PostPage.css';
import Post from "../post/Post"
import posts from "../data/db.json"
import { useState } from 'react';

function PostPage() {  
    
    return (
    <div className="PostPage">
      {
        posts.map((post) =>
        <Post {...post} />
        )
      }
    </div>
  );
}

export default PostPage;
