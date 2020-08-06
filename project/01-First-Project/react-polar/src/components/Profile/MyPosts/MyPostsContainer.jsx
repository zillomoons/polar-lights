import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let newPost = state.profilePage.newPostText;
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
//                 let onPostChange = (text) => {
//                     store.dispatch(updateNewPostTextActionCreator(text));
//                 };
//                 return <MyPosts newPostText={newPost} addPost={addPost}
//                                 updateNewPostText={onPostChange} posts={state.profilePage.posts}/>
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
