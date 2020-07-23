import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likescount={p.likesCount} />)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text); // calling function from BLL through props
        newPostElement.current.value = ' ';
    }

    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
            {postsElements}
        </div>

    );
}

export default MyPosts;
