import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id: 1, message: 'Hey, how are you?', likesCount: '5'},
    {id: 2, message: 'Yo, everything is cool!', likesCount: '12'},
    {id: 3, message: 'Be true to yourself.', likesCount: '25'},
    {id: 4, message: 'Make a difference.', likesCount: '34'},
    {id: 5, message: 'Stay calm and procced.', likesCount: '27'}
]
let dialogsData = [
    { id: 1, name: 'Vlad'},
    { id: 2, name: 'Julia'},
    { id: 3, name: 'Sveta'},
    { id: 4, name: 'Nastaya'},
    { id: 5, name: 'Misha'}
]
let messagesData = [
    { id: 1, message: 'Hey, how are you?'},
    { id: 2, message: 'Be cool'},
    { id: 3, message: 'Be cool'},
    { id: 4, message: 'Be cool'},
    { id: 5, message: 'See you later!'}
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
