import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hey, how are you?', likesCount: '5'},
        {id: 2, message: 'Yo, everything is cool!', likesCount: '12'},
        {id: 3, message: 'Stay calm and procced', likesCount: '27'}
    ]

    let postsElements = postsData.map(p => <Post message={p.message} likescount={p.likesCount}/>)
    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
            {postsElements}
        </div>

    );
}

export default MyPosts;
