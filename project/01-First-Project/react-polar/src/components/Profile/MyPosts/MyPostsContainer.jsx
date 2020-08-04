import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let newPost = state.profilePage.newPostText;
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };
                return <MyPosts newPostText={newPost} addPost={addPost}
                                updateNewPostText={onPostChange} posts={state.profilePage.posts}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
