import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likescount={p.likesCount} />)

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
