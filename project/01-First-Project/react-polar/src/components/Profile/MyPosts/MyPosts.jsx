import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>My Posts
                <div>
                    <textarea></textarea>
                    <button>Send</button>
                </div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />

            </div>

    );
}

export default MyPosts;
