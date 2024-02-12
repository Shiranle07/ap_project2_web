// Post.js
import React from 'react';
import './Post.css';

function Post({ id, author, post_text, publication_date }) {
    return (
        <a href="post.html?id={id}">
        <div className='single_post'>
        <post>
            <h3 className='title'>
                {author}'s post
            </h3>
            <div className='user_name'>
                {author}
            </div>
            <time className='date'>
                {publication_date}
            </time>
            <div className='text'>
                {post_text}
            </div>
            
        </post>  
        </div>
        
    </a>
    );
}

export default Post;
