import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements = props.profilePage.posts.map( p => <Post message={p.message} likescount={p.likesCount} />)
    let newPost = props.profilePage.newPostText;
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} value={newPost} placeholder='Add new post'/>
            </div>
            <div>
                <button onClick={ onAddPost }>Add post</button>
            </div>
            {postsElements}
        </div>

    );
}

export default MyPosts;
