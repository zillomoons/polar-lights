import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likescount={p.likesCount} />)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost(); // calling function from BLL through props
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
            {postsElements}
        </div>

    );
}

export default MyPosts;
