import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './redux/state';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 addMessage={addMessage}
                 updateNewPostText={updateNewPostText}
                 updateNewMessageText = {updateNewMessageText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree); //calling subscribe and putting inside rerenderEntireTree



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
