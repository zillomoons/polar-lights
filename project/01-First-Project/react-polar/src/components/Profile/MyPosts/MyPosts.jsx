import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likescount={p.likesCount} />)

    let newPost = props.newPostText;

    let addPost = () => {
        props.dispatch(addPostActionCreator()); // calling function from BLL through props
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} value={newPost} placeholder='Add new post'/>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
            {postsElements}
        </div>

    );
}

export default MyPosts;
