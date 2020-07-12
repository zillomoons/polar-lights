import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import Like from "./Post/Like";

const MyPosts = () => {
    return (
            <div>My Posts
                <div>
                    <textarea></textarea>
                    <button>Send</button>
                </div>
                <Post message='Hey, how are you?' />
                <Like count='15' />
                <Post message='Yo, everything is cool!' />
                <Like count='20' />
            </div>

    );
}

export default MyPosts;
