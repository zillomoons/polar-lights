import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utilities/validators';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const maxLength30 = maxLengthCreator(30);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component="textarea"
                validate={[required, maxLength30]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddNewPostReduxForm = reduxForm({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm)

const MyPosts = (props) => {
    let postsElements =
        props.profilePage.posts.map(p => <Post message={p.message} likescount={p.likesCount} key={p.id} />)

    let addPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <AddNewPostReduxForm onSubmit={addPost} />
            {postsElements}
        </div>

    );
}

export default MyPosts;
